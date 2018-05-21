import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_SRC = 'http://via.placeholder.com/250x250';

const Image = ({ height, width, src = DEFAULT_SRC }) => {
  const style = {
    maxWidth: width ? `${width}px` : undefined,
    maxHeight: height ? `${height}px` : undefined,
  }

  return (
    <img alt="" className="image" style={style} src={src} />
  );
}

Image.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  src: PropTypes.string,
}

export default Image;