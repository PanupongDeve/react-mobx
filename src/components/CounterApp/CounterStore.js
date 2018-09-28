import { observable, autorun, action, computed } from "mobx";

export default class CounterStore {
  @observable
  count = 0;

  @action
  increase() {
    this.count = this.count + 1;
  }

  @action
  decrease() {
    this.count = this.count - 1;
  }

  @computed
  get Count() {
      return this.count;
  }
}


