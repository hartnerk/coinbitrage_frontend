import React, {useState } from 'react';
import { Redirect } from 'react-router-dom';
import { addAlert } from '../api/CoinbitrageAPI';


const AddAlertPage = ({user}) => {
    const [redirect, setRedirect]= useState(false)

    const handleSubmit = async(evt)=>{
        console.log('before prevent user ? ', user)
        evt.preventDefault();
        console.log('user ? ')
        console.log('user ? ', user)
        let alertObject={
            "user" : user.id,
            "alert_name" : evt.target.alertName.value,
            "coin" :  evt.target.coin.value,
            "threshold" :  evt.target.threshold.value,
            "enabled" :  true,
            }
        
        try{
            addAlert(alertObject, localStorage.getItem("auth-user")).then( 
                setRedirect(true))
        }catch (err){
            console.error('error occurred add article: ', err);
        }
    }

 return (
    redirect
    ?
        <Redirect to='/'></Redirect>
    :
        <div className="auth-wrapper">
            {console.log('login render')}
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Add Alert</h3>
                    <div className="form-group">
                        <label>New Alert Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name"  name='alertName'/>
                    </div>
                    <div className="form-group">
                        <label>Coin</label>
                        <input type="text" className="form-control" placeholder="Enter Coin"  name='coin'/>
                    </div>
                    <div className="form-group">
                        <label>Notification threshold (% Diffrence) </label>
                        <input type="text" className="form-control" placeholder="Enter 1-100"  name='threshold'/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Add</button>
                </form>
            </div>
        </div>   
    );
};

export default AddAlertPage;