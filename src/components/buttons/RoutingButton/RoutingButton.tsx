import { ReactNode, ButtonHTMLAttributes, useContext } from 'react';
import classes from './RoutingButton.module.css';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';

interface RoutingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const RoutingButton: React.FC<RoutingButtonProps> = ({ children }) => {
  
  const {darkMode} = useContext(ThemeContext);
  
  return (
    <button className={`${classes.routingButton} ${darkMode && classes['routingButton--dark']}`}> {children} </button>
  );
};

export default RoutingButton;