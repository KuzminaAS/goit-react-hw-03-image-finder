import {Component} from 'react';
import styles from './SearchForm.module.css'


class SearchForm extends Component {
    
  state = {
     query: ""
  }
  
  handleChange = (evt) => {
    this.setState({ query: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({query:''})
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={styles.SearchForm_button}>
     <span className={styles.SearchForm_button_label}>Search</span>
    </button>

      <input
      onChange={handleChange}
      name="query"
      value={this.state.query}
      className={styles.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
)
    }
   
}
    

export default SearchForm ;
