import React, { Component } from 'react';
import "./spread.css";
import { getSpreads } from '../../api/CoinIOAPI';
import { Button } from 'react-bootstrap';


class Spread extends Component {
  state = {
    last : null,
    first: null,
    spreads: null
  };


  componentDidMount = () => {
    const res= this.preFetchData(this.props.coin); 
  }

  async preFetchData(coin) {
    console.log('Spread if fetch data ', coin)
    console.log('Spread if fetch this.props.isLoggedIn ', this.props.isLoggedIn)
     if(this.props.isLoggedIn){
      let token = localStorage.getItem("auth-user") ;
      console.log('Spread if fetch data ', coin)
      // getSpreads(coin, token).then(res => console.log('Spread this is the res', res))
      const res = await getSpreads(coin, token)
      console.log('Spread response', res)
      this.setState({
        spreads: res.exachnge_prices,
        last: res.exachnge_prices.length-1,
        first: 0})
    }
  }

  handledown(){
    if(this.state.spreads.length<(this.state.last*2)){
      this.setState({last: this.state.last-1})
    }
  }

  handleup(){    
    if((this.state.spreads.length-1)>(this.state.first*2)){
      this.setState({ first: (this.state.first+1)})
    }
  }

  getLowest = (spreads) => {
    let temp=[]
    spreads.map((spread, index) => (
      temp.push(spread)
    ))

    return (
      <div class="flex-container">
        <div id='lowest'>

          <p>{temp[this.state.first].exchange} </p>
          <p>{temp[this.state.first].rate} </p>
          <Button variant="link" onClick={() => this.handleup()}>
            →
          </Button>

        </div>
        <div id='diff'>
          <h2> { this.props.coin} Opportunity </h2>
          <p>{temp[this.state.last].rate-temp[this.state.first].rate} </p>
          <p>{(((temp[this.state.last].rate-temp[this.state.first].rate))/((temp[this.state.last].rate+temp[this.state.first].rate))*100)} %</p>
        </div>
        <div id='highest'>
          <p>{temp[this.state.last].exchange} </p>
          <p>{temp[this.state.last].rate} </p>
          <Button variant="link" onClick={() => this.handledown()}>
              ←
          </Button>
        </div>
      </div>
    )
  }

  render(){
    return (
        <div>
          <p>{console.log('Spread render spreads ', this.state.spreads)}</p>          
              {!this.state.spreads
                ?
                <h2>No Spreads</h2>
                :
                <div>
                  {Array.isArray(this.state.spreads)
                    ?
                    this.getLowest(this.state.spreads)
                    :
                    <h2>{this.state.spreads}</h2>
                  }
                </div>
              }
        </div>
    );
  }
}

export default Spread;