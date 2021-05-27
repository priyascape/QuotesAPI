
import logo from './logo.svg';
import './App.css';
import AllQuotes from './components/AllQuotes';
import QuoteDetails from './components/QuoteDetails';
import Create from './components/Create';
import Edit from './components/Edit';
import {Router, Link} from "@reach/router";

function App() {
  return (
    <div className="App">
      <h1>Famous Quotes</h1>
      <Link to= "/quotes/new">Create new quote</Link>

      <Router>

        <AllQuotes path= "/"></AllQuotes>
        <Create path="/quotes/new"></Create>
        <QuoteDetails path= "/quotes/:id"></QuoteDetails>
        <Edit path="/quotes/edit/:id"></Edit>

      </Router>
    </div>
  );
}

export default App;
