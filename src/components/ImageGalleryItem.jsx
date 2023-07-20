import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { ImageGallery } = this.props;
    return (
      <li class="gallery-item">
        {/* <img key={el.id} src={el.webformatURL} alt={el.tag} /> */}
      </li>
    );
  }
}

export default ImageGalleryItem;
