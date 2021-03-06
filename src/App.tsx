import React from 'react';
import './App.css';
interface IProps {}
interface IState {}
export default class App extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className='root'>
          <h1 data-test='hello' className='h1'>
            Hello Welcome to React Webpack with TypeScript
          </h1>
        </div>
      </React.Fragment>
    );
  }
}
