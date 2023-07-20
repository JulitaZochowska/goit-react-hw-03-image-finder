import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';

import React, { Component } from 'react';

class App extends Component {
  async fetchImages(query) {
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
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.fetchImages} />
        {/* <ImageGallery /> */}
      </div>
    );
  }
}

export default App;
