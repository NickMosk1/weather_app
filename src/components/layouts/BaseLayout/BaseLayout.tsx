import React, { ReactNode } from 'react';
import classes from "./BaseLayout.module.css";
import MyFooter from './MyFooter/MyFooter';
import MyHeader from './MyHeader/MyHeader';

interface BaseLayoutProps {

  children: ReactNode;

}

const BaseLayout = ({ children }: BaseLayoutProps) => {

  return (

    <div>
      
      <MyHeader/>
      
      <main className={classes.myMain}>

        {children}

      </main>
      
      <MyFooter/>

    </div>

  );

};

export default BaseLayout;