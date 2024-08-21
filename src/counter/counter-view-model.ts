import { action, computed, makeObservable, observable } from 'mobx'

export class CounterViewModel {
  @observable
  private count = 0

  public constructor() {
    makeObservable(this)
  }

  @action
  public increment = () => {
    this.count += 1
  }

  @computed
  public get countLabel(): string {
    return `You clicked ${this.count} times`
  }
}
