import React, { Component } from "react";

class FramedImage extends Component {
  render() {
    return (
      <div
        className="relative framed w-full h-full"
        style={{ backgroundImage: `url("${this.props.src}")` }}
      >
        <style jsx>{`
          .framed {
            background-repeat: no-repeat;
            background-position: 80% 30%;
            background-size: cover;
          }
        `}</style>
      </div>
    );
  }
}

export default FramedImage;
