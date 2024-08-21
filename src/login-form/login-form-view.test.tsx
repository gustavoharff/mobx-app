import '@testing-library/react-native/extend-expect'

import { act, fireEvent, render, screen } from '@testing-library/react-native'

import { LoginFormView } from './login-form-view'
import { LoginFormViewModel } from './login-form-view-model'

describe('<LoginFormView />', () => {
  test('Placeholders renders correctly on LoginFormView', () => {
    const viewModel = new LoginFormViewModel()

    render(<LoginFormView viewModel={viewModel} />)

    const emailPlacelhoder = screen.getByPlaceholderText('Email')
    const passwordPlacelhoder = screen.getByPlaceholderText('Password')

    expect(emailPlacelhoder).toBeTruthy()
    expect(passwordPlacelhoder).toBeTruthy()
  })

  test('Authenticates when button is pressed', () => {
    const viewModel = new LoginFormViewModel()

    const autenticate = jest.fn()

    viewModel.autenticate = autenticate

    render(<LoginFormView viewModel={viewModel} />)

    const passwordAlert = screen.queryByText('Password must have at least 8 characters')

    expect(passwordAlert).toBeOnTheScreen()

    act(() => {
      viewModel.setEmail('john@doe.com')
      viewModel.setPassword('12345678')
    })

    expect(passwordAlert).not.toBeOnTheScreen()

    fireEvent.press(screen.getByText('Login'))

    expect(autenticate).toHaveBeenCalledTimes(1)
  })
})
