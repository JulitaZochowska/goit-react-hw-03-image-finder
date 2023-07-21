import ImageGalleryItem from './ImageGalleryItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            tag={image.tags}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string, // Ten jest do wykorzystania w modalu - jest to src dla powiększonego obrazka
      tags: PropTypes.string,
    })
  ),
};

export default ImageGallery;
