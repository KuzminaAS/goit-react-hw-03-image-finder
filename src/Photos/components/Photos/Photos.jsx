import { Component, createRef } from 'react';
import styles from './Photos.module.css';

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
        
        error: null,
        largeImageURL: "",
        showModal: false
   }

    listRef = createRef()
    
    componentDidMount() {
        this.fetchPictures();
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

   
    fetchPictures() {
        const { page, limit, query } = this.state;

        const picturesRequest = getPagePictures({ page, limit, query });
        
        picturesRequest
            .then(({ data }) => this.setState(({ pictures }) => {
                
                const newPictures = [...pictures, ...data.hits];

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

    searchPictures = (query) => {
        this.setState({
            pictures: [],
            isLoading: true,
            query
        })
    }

    loadMore = (e) => {
        e.preventDefault();
        this.setState(({ page }) => {
            return {
                isLoading: true,
                page: page + 1,
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

    render() {
        const { pictures, isLoading, error, largeImageURL, showModal} = this.state;
        const { listRef, searchPictures, loadMore, closeModal, openModal} = this;
    
        return (
            <div className="Photos">
                {showModal && <Modal closeModal={closeModal}><img src={largeImageURL} alt=""/></Modal>}
                <Searchbar onSubmit={searchPictures} />
                    
                <div ref={listRef}><ImageGallery openModal={openModal} list={pictures}/> </div> 
                    
                {error && <p>Something was wrong ...</p>}
                {isLoading && !error && <Loader />}
               <div className={styles.container}>  <Button onClick={loadMore}/> </div>
            </div>
        );
  }
};

export default Photos;
