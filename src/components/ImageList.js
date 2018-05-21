import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

const ImageList = ({ maxImageWidth, images = [] }) => {
  return images.map(({ src, width, height }, index) => <Image key={index} width={maxImageWidth || width} height={height} src={src} />)
}

ImageList.propTypes = {
  maxImageWidth: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  })).isRequired,
}

export default ImageList;