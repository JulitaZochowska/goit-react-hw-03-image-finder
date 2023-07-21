import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { src, tag } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css['ImageGalleryItem-image']} src={src} alt={tag} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  tag: PropTypes.string,
};

export default ImageGalleryItem;
