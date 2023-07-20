import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import css from './ContactForm.module.css';

class Searchbar extends Component {
  state = {
    inputSearch: '',
    imageGallery: [],
    isLoading: false,
    page: 1,
    per_page: 12,
  };

  async componentDidMount() {
    this.fetchImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (inputSearch !== prevState.inputSearch && inputSearch.length > 0) {
      await this.fetchImages();

      if (inputSearch.length === 0 && imageGallery.length > 0) {
        this.setState({ imageGallery: {} });
      }
    }
  }
  fetchImages = async () => {
    const { inputSearch } = this.state;
    const response = await fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=36881053-d0d1537e2fca48fbbc934d91b&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ isLoading: true });

    try {
      const { page, per_page } = this.state;
      const data = await response.json();
      this.setState(prevState => ({ ...prevState, imageGallery: data }));
    } catch (error) {
      console.log('errr', error);
    }
  };

  handleSubmit = e => {
    e.preventDeafult();
    this.fetchImages();
  };

  handleChange = e => {
    const { value, inputSearch } = e.target;
    this.setState({ [inputSearch]: value });
  };

  render() {
    return (
      <header class="searchbar">
        <form onSubmit={this.handleSubmit} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            name="inputSearch"
            value={this.state.inputSearch}
            onChange={this.handleChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };
export default Searchbar;
