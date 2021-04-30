import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge'
import { Form, Button } from 'react-bootstrap';


class CoinSearch extends Component {

  render() {
    const { coins, handleSubmit, handleDelete} = this.props;
    return (
    <div>
        <Form className="form-inline" onSubmit={handleSubmit}>
            <Form.Control className="form-inline-input" type="text" placeholder="Coin Notatation" name='newcoin' />
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        { coins.map((coin, index) => (
            <Badge pill variant="info">
            {coin}
              <Button variant="link" onClick={handleDelete} name={coin}>
                  x
              </Button>
            </Badge>
        ))}
    </div>
     
    );
  }
}

export default CoinSearch;