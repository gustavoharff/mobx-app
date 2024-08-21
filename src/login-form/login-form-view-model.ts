import { makeAutoObservable } from 'mobx'

export class LoginFormViewModel {
  public email = ''

  public password = ''

  public constructor() {
    makeAutoObservable(this)
  }

  public setEmail = (email: string) => {
    this.email = email
  }

  public setPassword = (password: string) => {
    this.password = password
  }

  public autenticate = async () => {
    this.email = ''
    this.password = ''
  }

  public get isPasswordValid() {
    return this.password.length >= 8
  }
}
