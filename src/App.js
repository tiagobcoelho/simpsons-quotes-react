import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';


function App() {
  return (
    <div className="App">
        <Navbar />
        <QuoteCard quote="Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon." character="Dr. Nick" image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084" />
        <QuoteCard quote= "Shoplifting is a victimless crime, like punching someone in the dark." character="Nelson Muntz" image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72" />
        
        <QuoteList />
    </div>
  );
}

export default App;
