import React from "react";
import CounterStore from './CounterStore';
import {observer} from 'mobx-react';

let counterStore = new CounterStore();

@observer
class Counter extends React.Component {
  increase = () => {
    this.props.counterStore.increase();
  };
  decrease = () => {
    this.props.counterStore.decrease();
  };
  render() {
    return (
      <div>
        <button className="increase" onClick={this.increase}>
          +
        </button>
        <span>{this.props.counterStore.Count}</span>
        <button className="decrease" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }
}

const CounterApp = () => <Counter counterStore={counterStore} />;

export default CounterApp;
