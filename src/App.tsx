import React from 'react';
import classes from './App.module.css';
interface IProps {}
interface IState {}
export default class App extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className={classes.root}>
          <h1 data-test='hello' className={classes.h1}>
            Hello Welcome to React Webpack with TypeScript
          </h1>
        </div>
      </React.Fragment>
    );
  }
}
