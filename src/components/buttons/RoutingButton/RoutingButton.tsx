import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import classes from './RoutingButton.module.css';

interface RoutingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;

}

const RoutingButton: React.FC<RoutingButtonProps> = ({ children }) => {

  return (

    <button className={classes.routingButton}>

      {children}

    </button>

  );

};

export default RoutingButton;