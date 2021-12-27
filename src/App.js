import Home from './components/layout/home.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student from "./components/showStudent/showStudent.js";
import Create from "./components/createStudent/createStudent.js";
import Update from './components/updateStudent/updateStudent.js'
import { Container, Grow, Grid, AppBar } from '@material-ui/core';
import './App.css';
import makeStyles from './styles.js';

function App() {
  const classes = makeStyles();
  return (
    <Router>
      <div className="App">
        <Home></Home>
      </div >
      <Switch>
        <Route exact path="/">
          <Container className={classes.content}>
            <AppBar className={classes.appBar} position="static" color="inherit">
              <Student />
            </AppBar>
          </Container>
        </Route>
        <Route exact path="/create" component={(props) => <Create {...props} />}></Route>


        <Route exact path="/:id" component={(props) => <Update {...props} />}></Route>
      </Switch>
    </Router >
  );
}
export default App;
