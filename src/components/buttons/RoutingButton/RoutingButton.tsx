import { ReactNode, ButtonHTMLAttributes } from 'react';
import classes from './RoutingButton.module.css';

interface RoutingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  darkMode: boolean;
  children: ReactNode;
}

const RoutingButton: React.FC<RoutingButtonProps> = ({ children, darkMode }) => {
  return (
    <button className={`${classes.routingButton} ${darkMode && classes['routingButton--dark']}`}> {children} </button>
  );
};

export default RoutingButton;