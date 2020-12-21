import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  
  function handleSignOutButtonClick() {
    props.destroySession();
  }

  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      |
      <NavLink to='/questions/new'>New Question</NavLink>
      |
      {
        props.currentUser ? (
          <>
            <span>{props.currentUser.first_name}</span>
            <button onClick={handleSignOutButtonClick}>Sign Out</button>
          </>
        )
        :
        <NavLink to='/sign_in'>Sign In</NavLink>
      }
    </nav>
  )
}

export default Navbar;