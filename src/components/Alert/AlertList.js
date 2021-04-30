import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import Alert from './Alert.js'
import { getAlerts, deleteAlert } from '../../api/CoinbitrageAPI';
import "./alert.css";

class AlertList extends Component {
  state = {
    alerts : null
  };

  componentDidMount = () => {
    this.preFetchData(); 
  }

  async preFetchData() {
    if(this.props.isLoggedIn){
      let token = localStorage.getItem("auth-user") ;
      getAlerts(token).then(res => this.setState({
        alerts: res})).then( () => console.log('Alert list this is set state', this.state.alerts))
      }  
  }

  handleDelete = (id) => {
    deleteAlert(id, localStorage.getItem("auth-user"))
    let temp = this.state.alerts.filter(function( alert ) {
      return alert.pk !== id;
     });
    this.setState({ alerts : temp })
  }

 
  render() {
    return (
         <div className="main-wrapper">
            <div className="main-inner">
              <div className="AlertHeader">
                <h1 className="itemcenter">Alerts</h1>
                <Link className="itemright" id='addAlert' to="/AddAlertPage"><h1>+</h1></Link>
              </div>
              {!this.state.alerts
              ?
              <h2>no alerts</h2>
              :
                <div>
                  
                  {console.log('AlertList alert', this.state.alerts)}
                  <Accordion defaultActiveKey="0">
                    { this.state.alerts.map((alert, index) => (
                        <Alert alert={alert} index={index} handleDelete={this.handleDelete} ></Alert>
                      ))}
                  </Accordion>
                </div>
              }
           </div>
        </div>
    );
  }
}

export default AlertList;