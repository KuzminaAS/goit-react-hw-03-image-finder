import { Component, createRef } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import Loader from "../Loader";
import { getPagePictures } from '../shared/services/pictures.js';


class Photos extends Component {
   state = {
        pictures: [],
        page: 1,
        limit: 12,
        isLoading: false,
        query: '',
        
        more:false,
        error: null,
        showModal: false,
        largeImageURL: ""
   }

    listRef = createRef()
    
    componentDidMount() {
        this.fetchPictures();

        window.addEventListener('keydown',this.handleKeyDown)
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.pictures.length < this.state.pictures.length) {
            const { current } = this.listRef;
            return current.scrollHeight

        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isLoading} = this.state;
        if (isLoading) {
            this.fetchPictures();
        }

        if (snapshot !== null) {
                window.scrollTo({
                    top: snapshot,
                    behavior: "smooth"
                });
        } 
    }

    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    searchPictures = (query) => {
        this.setState({
            pictures: [],
            isLoading: true,
            query
        })
    }

    fetchPictures() {
        const { page, limit, query, more } = this.state;

        const picturesRequest = getPagePictures({ page, limit, query });
        

        picturesRequest
            .then(({ data }) => this.setState(({ pictures }) => {
                
                const newPictures = more ? [...pictures, ...data.hits] : data.hits;

                return {
                    pictures: newPictures,
                    isLoading: false,
                }
            }))
            .catch(error => this.setState({
                error,
                isLoading: false,
            }))
            .finally(() => this.setState({isLoading: false}))
    }

    loadMore = (e) => {
        e.preventDefault();
        this.setState(({ page }) => {
            return {
                isLoading: true,
                page: page + 1,
                more: true
            }
        })
        
    }

    openModal = (largeImageURL) => {
        this.setState(({showModal}) => ({
            showModal: !showModal,
            largeImageURL
        }))
    }    

    closeModal = () => {
        this.setState({showModal: false})
    }

     handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                this.closeModal();
            }
    }
   

    render() {
      
        const { pictures, isLoading, error, showModal, largeImageURL} = this.state;
        const { listRef, searchPictures,loadMore, openModal, closeModal} = this;
    
    return (
        <div className="Photos">
       {showModal && <Modal closeModal={closeModal}> <img src={largeImageURL} alt=""/></Modal>} 
        <Searchbar onSubmit={searchPictures} />
            
            
        <div ref={listRef}><ImageGallery openModal={openModal} list={pictures}><Loader/></ImageGallery> </div> 
            
        {error && <p>Something was wrong ...</p>}
        {isLoading && !error && <Loader />}
        <Button onClick={loadMore}/>
    </div>
  );
  }
};

export default Photos;
