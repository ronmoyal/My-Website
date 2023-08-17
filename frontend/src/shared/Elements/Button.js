import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--inverse`}
      >
        {props.children} 
      </Link>
    );
  }

  return (
    <button
      to={props.to}
      className={`button button--inverse`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children} 
    </button>
  );
 
};

export default Button;
