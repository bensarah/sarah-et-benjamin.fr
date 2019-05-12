import React, { Component } from "react";

class FramedImage extends Component {
  render() {
    return (
      <div className="container py18 px18 py36-ml px36-ml">
        <div
          className="framed w-full h-full"
          style={{ backgroundImage: `url("${this.props.src}")` }}
        />
        <style jsx>{`
          .container {
            height: 100vh;
            width: 100vw;
          }

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
