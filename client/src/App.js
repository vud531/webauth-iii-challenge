import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import Users from './users/Users';

class App extends React.Component {

    state = {
      loggedIn: false
    }

    updateStatus() {
      this.setState({ loggedIn: true })
    }

    logout() {
      localStorage.removeItem('jwt');
      this.props.history.push('/login');
    }

    render(){
      console.log(this.state)
      return [
        <header>
          {
            this.state.loggedIn ?
            <NavLink to="/users">Users</NavLink>:
            <NavLink to="/login">Login</NavLink>
          }
                    &nbsp;|&nbsp;

          {
            this.state.loggedIn ?
            
            <button type="button" onClick={this.logout}>
              Logout
            </button>:
            <NavLink to="/register">Register</NavLink>
          }
        </header>,
        <main>
          <Route path="/login" render={() => <Login updateStatus={this.updateStatus} {...this.props}/> } />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
        </main>
    ]
    }
  
}

export default App;
