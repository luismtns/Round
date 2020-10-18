import React, { createContext } from "react";
import AuthService from '../../src/services/auth/index';

export const UserContext = createContext<any | null>({ user: null });

class UserProvider extends React.Component {
  state = {
    user: null,
  };

  // TODO auth get user pass to state  
  componentDidMount = async () => {
    // setTimeout(async () => {
    //   const user = await AuthService.check(true);
    //   this.setState({ user });
    // }    
    AuthService.onAuthStateChanged((userState:firebase.User | null)=>{
      this.setState({ userState });
      console.log(userState);
      
    })
  };

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
