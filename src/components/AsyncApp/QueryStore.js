import { observable, autorun, action, computed } from "mobx";
import axios from 'axios';

export default class CounterStore {
  @observable
  data = 'Plese click button to load data';

  @action
  async queryData() {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos/2d')
        this.data = response.data.title;
    } catch (error) {
        this.data = 'load Data Error';
    }
  }

  @computed
  get showData() {
      return this.data;
  }
}