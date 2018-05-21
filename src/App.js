import React, { Component } from 'react';

import ImageList from './components/ImageList';
import './App.css';

// Get random integer between min and max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);


class App extends Component {

  state = {
    images: []
  };

  componentDidMount() {
    // Generate 15 images of random size
    const images = Array.from(Array(15)).map(() => {
      const height = getRandom(100, 300);
      const width = getRandom(100, 500);
      return {
        src: `http://via.placeholder.com/${width}x${height}`,
        height,
        width
      };
    })

    this.setState({
      images
    })
  }
  render() {
    return (
      <div className="App">
        <ImageList maxImageWidth={300} images={this.state.images} />
      </div>
    );
  }
}

export default App;
