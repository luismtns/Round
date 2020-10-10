import React, { createContext } from "react";
import { AuthService } from "../services/auth"; // Auth
export const UserContext = createContext<any | null>({ user: null });

class UserProvider extends React.Component {
  state = {
    user: false,
  };

  // TODO auth get user pass to state
  componentDidUpdate = async () => {
    // setTimeout(async () => {
    //   const user = await AuthService.check(true);
    //   this.setState({ user });
    // }
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
