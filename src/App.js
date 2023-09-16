import logo from './logo.svg';
import './App.css';
import Launches from './Components/Launches';
import Launch from './Components/Launch';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
 uri :"/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }}>
        </img>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch}/>
        </div> 
        </Router>
    </ApolloProvider>
  );
}

    
export default App;
