import React, { Component } from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import './App.css'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      simpson:[],
    }
  }

  componentDidMount() {
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
    fetch(url)
        .then(response => response.json())
        .then(initialQuote=> {
            this.setState({
                simpson:initialQuote[0]
            });
    });
};

  getNewQuote = (event) => {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
    .then(response => response.data)
    .then(newQuote => {
      this.setState({
        simpson:newQuote[0],
      });
    })
  
  }


render(){
  return (
    <div className="App">
        <Navbar />
        <div className='container'>
          <QuoteCard {...this.state.simpson}/>
          <button onClick={this.getNewQuote}>New quote</button>
        </div>
        
    </div>
  );
}
}

export default App;
