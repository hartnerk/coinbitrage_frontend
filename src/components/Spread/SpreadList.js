import React, { Component } from 'react';
import Spread from './Spread'
import CoinSearch from './CoinSearch.js'


class SpreadList extends Component {
  state = {
    coins : ['BTC', 'ETH', 'LTC']
  };

  handleSubmit = async(event)=>{
    console.log('SpreadList handleSubmit', event.target.newcoin.value )
    event.preventDefault();
    let newArray=this.state.coins
    console.log('SpreadList handleSubmit', newArray )
    console.log('SpreadList handleSubmit', event.target.newcoin.value )
    newArray=newArray.concat(event.target.newcoin.value)
    console.log('SpreadList handleSubmit New array', newArray )
    this.setState({coins : newArray})
  }

  handleDelete= async(event)=>{
    event.preventDefault();
    let newArray=this.state.coins
    console.log('Speadlist ondelete ', event.target.name )
    newArray = newArray.filter(function(item) {
      return item !== event.target.name
    })
    this.setState({coins : newArray})
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
        <div className="main-wrapper">
            <div className="main-inner">
                <h2>Spread List</h2> 
                {console.log('Spread list this.state.coins ', this.state.coins)}
                <CoinSearch coins={this.state.coins} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete}></CoinSearch>
                {console.log('SpreadList render spreads')}
                <hr></hr>
                <div>
                  {this.state.coins.map((coin, index) => (
                    <Spread isLoggedIn={isLoggedIn} coin={coin}></Spread>
                  ))}
                </div>
            </div>
        </div>
    );
  }
}

export default SpreadList;