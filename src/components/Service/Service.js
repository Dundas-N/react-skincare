import React, { Component } from 'react';
import "./Service.scss";

export default class Service extends Component {
  state = {
    showInfo:false
  };
  handleInfo =()=> {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }
    render() {
        const{ id, service, img, name, info } = this.props.service;
        const{ removeService } = this.props;
        return <article className="service">
          <div className="img-container">
            <img src={ img } alt=""/>
             <span className="close-btn" onClick={() => {removeService(id);}}>
               <i className="fas fa-window-close" />
             </span>
          </div>

          <div className="service-info">
              <h3>{service}</h3>
              <h4>{name}</h4>
              <h5>
                 info{" "}
                 <span onClick={this.handleInfo}>
                     <i className="fas fa-caret-square-down" />
                 </span>
              </h5>
              {this.state.showInfo && <p>{info} </p>}  
          </div>
        </article>;       
    }
}
