import React, { Component } from 'react';

class ImageGallery extends Component {
  render() {
    const { ImageGallery } = this.props;
    return (
      <ul class="gallery">
        {ImageGallery.map(el => (
          <img key={el.id} src={el.webformatURL} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
