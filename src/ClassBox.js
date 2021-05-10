import React, { Component } from 'react';
import Popup from './Popup';

class ClassBox extends Component {
  state = {
    count: 0,
    color: "#d04ef8",
    isOpen: false,
    running: false,
    animated: false,
  }

  moveBox = (e) => {
    this.setState({
      count: this.state.count + 1,
      color: "#" + Math.random().toString(16).substr(-6),
      running: !this.state.running,
      animated: true,
    });
  }
  removAnimation = (e) => {
    e.target.classList.remove("animated");
    this.setState({ isOpen: true });
  }

  onClose = () => {this.setState({ 
    isOpen: false ,
    animated: false,
    running: false
  })}
  stopProp = (e) => e.stopPropagation() ;

  render() {
    return (
      <div>
        <h2 id="classText">Class Component</h2>
        
        { !this.state.isOpen ? null : <Popup
          text={this.state.count}
          onClose={this.onClose}
          className="popupClassBox"
        />
        }

        <div className={` classBox 
                           ${ this.state.animated && "animated" }
                          ${ this.state.running? "running" : "paused" }
                        `}
                        
             onClick={ this.state.isOpen ? null : this.moveBox } 
             onAnimationEnd={this.removAnimation}

          style={{ backgroundColor: this.state.color }}>
          <p onClick = {this.stopProp} >{this.state.count}</p>
        </div>
      </div>
    );
  }
}
export default ClassBox