import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./alert.css";
import { editAlert, deleteAlert } from '../../api/CoinbitrageAPI';

class Alert extends Component {
  state = {
    switch: true,
  }

  componentDidMount(){
    this.setState({ switch: this.props.alert.fields.enabled})
  }

  handleSwitchChange = (alert) => {
    this.setState({ switch : !this.state.switch});
    let alertObject={
      "user" : alert.fields.user,
      "alert_name" : alert.fields.alert_name,
      "coin" :  alert.fields.coin,
      "threshold" :  alert.fields.threshold,
      "enabled" :  !this.state.switch,
      }
    try{
      editAlert(alertObject, this.props.alert.pk, localStorage.getItem("auth-user"))
    }catch (err){
      console.error('error occurred add article: ', err);
    }

  }

  handelUpdate(id, event){
    // event.preventDefault()
    console.log('ALERT handle update ', event)
    console.log('ALERT handle update ', this.props)
    let alertObject={
        "user" : id,
        "alert_name" : event.target.alertName.value,
        "coin" :  event.target.coin.value,
        "threshold" :  event.target.threshold.value,
        "enabled" :  this.state.switch,
        }
    try{
      editAlert(alertObject, this.props.alert.pk, localStorage.getItem("auth-user"))
      this.setState({ switch : this.state.switch })
    }catch (err){
      console.error('error occurred add article: ', err);
    }
  }

  handleDelete = (id) => {
    deleteAlert(id, localStorage.getItem("auth-user"))
    // let temp = this.state.alerts.filter(function( alert ) {
    //   return alert.pk !== id;
    //  });
    // this.setState({ alerts : temp })
  }

  render() {
    const { alert, index, handleDelete} = this.props;
    return (
      <div>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={index}>
            
            <div className='AlertHeader'>
              <Form.Check 
                  className='itemleft' 
                  type="switch"
                  id={"custom-switch"+index.toString()}
                  label="Activate"
                  checked={this.state.switch}
                  onChange={()=>this.handleSwitchChange(alert)}
              />
              <h2 id='alert-title'>{alert.fields.alert_name}</h2>
              <Button className='itemright' color='red' onClick={() => handleDelete(alert.pk)}>Delete</Button>
              {console.log('alert acordian ', alert.pk)}
              
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
            <div>
              <Card.Body>
                <Form onSubmit={(e) => this.handelUpdate(alert.fields.user, e)}>
                {/* <Form onSubmit={this.handelUpdate}> */}
                    <div className="form-group">
                        <label>New Alert Name</label>
                        <input type="text" className="form-control" placeholder={alert.fields.alert_name} name='alertName'/>
                    </div>
                    <div className="form-group">
                        <label>Coin</label>
                        <input type="text" className="form-control" placeholder={alert.fields.coin}  name='coin'/>
                    </div>
                    <div className="form-group">
                        <label>Notification threshold (% Diffrence) </label>
                        <input type="text" className="form-control" placeholder={alert.fields.threshold}   name='threshold'/>
                    </div>
                    <Button type="submit" value="Submit"  className="btn btn-primary btn-block">Save Update</Button>
                </Form>
              
              
              </Card.Body>

            </div>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}

export default Alert;