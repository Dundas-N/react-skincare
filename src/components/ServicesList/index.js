import React, { Component } from 'react';
import './ServiceList.scss';
import Service from '../Service/Service';
import { serviceData } from '../serviceData';

export default class ServicesList extends Component {
  state = {
    services:serviceData
  };
  removeService = id =>{

    const {services} = this.state;
    const sortedServices = services.filter(service => service.id !==id);
    this.setState({
      services:sortedServices
    })
  };      

    render() {
      const {services} = this.state;

        return (
          <section className="serviceList">
           {services.map(service =>{
             return <Service key={service.id} service={service} removeService={this.removeService} />;
           })}
          </section>  
        );            
    }
}
