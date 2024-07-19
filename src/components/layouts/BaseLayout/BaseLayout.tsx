import { ReactNode, useContext } from 'react';
import classes from "./BaseLayout.module.css";
import MyFooter from './MyFooter/MyFooter';
import MyHeader from './MyHeader/MyHeader';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <MyHeader/>
      <main className={`${classes.myMain} ${darkMode ? classes['myMain--dark'] : ''}`}>
        {children} 
      </main>
      <MyFooter/>
    </>
  );
};

export default BaseLayout;