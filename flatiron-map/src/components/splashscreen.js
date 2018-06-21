import React, { Component } from 'react';

export default class SplashScreen extends Component {
  renderSplash() {
        let splashStyle = {
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        }
        return(
            <div onClick={this.props.clickHandler} style={splashStyle}>
                <img style={{width:500+'px'}} alt="Flatiron Map Logo" src={require("../images/fi-map-logo.jpg")}></img>
            </div>
        )
    }

    render() {
        return this.renderSplash()
    }
}
