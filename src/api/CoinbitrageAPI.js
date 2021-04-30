const BASE_URL = 'https://coinbitrage.herokuapp.com';

  const getAlerts = async (token) => {
    const response = await fetch(`${BASE_URL}/alerts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    const data = await response.json();
    return data 
  };
  
  const getAlertByID = async (token, alert_id) => {
    const response = await fetch(`${BASE_URL}/get_alert_by_id/${alert_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    const data = await response.json();
    return data 
  };
  
  const addAlert= async (AlertObject, token) => {
    console.log('in coinbittrage api addalert')
    return fetch(`${BASE_URL}/alerts/new`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: "POST",
      body: JSON.stringify(AlertObject)
    });
  };

  const editAlert= (AlertObject, alert_id, token) => {
    console.log('COIBITRAGE API edit alert alert object , alert id, tokes', AlertObject, alert_id, token)
    console.log(`${BASE_URL}/alerts/${alert_id}/edit`)
    return fetch(`${BASE_URL}/alerts/${alert_id}/edit`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: "POST",
      body: JSON.stringify(AlertObject)
    });
  };

  const deleteAlert= (id, token) => {
    return fetch(`${BASE_URL}/alerts/${id}/delete`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: "POST"
    });
  };
  
  
  export { getAlerts, getAlertByID, addAlert, editAlert, deleteAlert }