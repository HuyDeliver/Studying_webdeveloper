import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDo/ListToDo';
import MyComponent from './example/MyComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './example/Home';
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/detailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            {/* <ListToDo /> */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/todo">
                <ListToDo />
              </Route>
              <Route path="/about">
                <MyComponent />
              </Route>
              <Route path="/users" exact>
                <ListUsers />
              </Route>
              <Route path="/users/:id">
                <DetailUser />
              </Route>
            </Switch>
          </header>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Router>
    </>
  );
}

export default App;
