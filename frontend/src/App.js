import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import './App.css'
function App() {
  return (
    <div className="main">
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
  </div>
  );
}

export default App;
