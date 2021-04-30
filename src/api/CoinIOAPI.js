const BASE_URL = 'https://coinbitrage.herokuapp.com/coinbitrage_api';

  const getSpreads = async (coin_name, token) => {
    console.log("CoinOIAPI get spread ",`${BASE_URL}/coinio/${coin_name}/best`)
    const response = await fetch(`${BASE_URL}/coinio/${coin_name}/best`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    const data = await response.json();
    console.log('CoinOIAPI returned data',data  )
    return data
  };

  export { getSpreads }
  