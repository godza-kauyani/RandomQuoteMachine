import React, {Component} from 'react';
import './App.css';
import QuotesBox from './Components/QuotesBox/QuotesBox';
import {Container} from 'reactstrap';
import {quotes} from './quotes';

class App extends Component {
  //initial state of the component
  state = {quote: ''};
  //to be used by the component
  onClick = () => {
    this.getQuote();
  };
  getQuote = () => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({quote: quote});
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <Container>
        <QuotesBox
          quote={this.state.quote}
          onClick={this.onClick}
        />
      </Container>
    );
  }
}

export default App;
