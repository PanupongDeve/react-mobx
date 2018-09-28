import React from "react";
import QueryStore from './QueryStore';
import {observer} from 'mobx-react';

let queryStore = new QueryStore();

@observer
class Query extends React.Component {
    loadData = () => {
        this.props.queryStore.queryData();
    }

  render() {
    return (
      <div style={{ marginTop: '25px'}}>
        <span>{this.props.queryStore.showData}</span>
        <br />
        <button onClick={this.loadData}>
          LoadData
        </button>
      </div>
    );
  }
}

const QueryApp = () => <Query queryStore={queryStore} />;

export default QueryApp;
