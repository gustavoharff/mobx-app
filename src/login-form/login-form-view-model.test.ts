import { LoginFormViewModel } from './login-form-view-model'

describe('login-form-view-model', () => {
  it('should have an email observable', () => {
    const viewModel = new LoginFormViewModel()
    expect(viewModel.email).toBe('')
  })

  it('should have a setEmail action', () => {
    const viewModel = new LoginFormViewModel()

    viewModel.setEmail('john@doe.com')

    expect(viewModel.email).toBe('john@doe.com')
  })

  it('should have a password observable', () => {
    const viewModel = new LoginFormViewModel()
    expect(viewModel.password).toBe('')
  })

  it('should have a setPassword action', () => {
    const viewModel = new LoginFormViewModel()

    viewModel.setPassword('12345678')

    expect(viewModel.password).toBe('12345678')
  })

  it('should have a isPasswordValid computed', () => {
    const viewModel = new LoginFormViewModel()

    viewModel.setPassword('12345678')

    expect(viewModel.isPasswordValid).toBe(true)

    viewModel.setPassword('1234567')

    expect(viewModel.isPasswordValid).toBe(false)
  })

  it('should have an authenticate action', async () => {
    const viewModel = new LoginFormViewModel()

    viewModel.setEmail('john@doe.com')
    viewModel.setPassword('12345678')

    await viewModel.autenticate()

    expect(viewModel.email).toBe('')
    expect(viewModel.password).toBe('')
  })
})
