import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { LoginFormViewModel } from './src/login-form/login-form-view-model'
import { LoginFormView } from './src/login-form/login-form-view'

export default function App() {
  const loginFormViewModel = new LoginFormViewModel()

  return (
    <View style={styles.container}>
      <LoginFormView viewModel={loginFormViewModel} />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
