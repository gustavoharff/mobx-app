import { observer } from 'mobx-react-lite'
import { LoginFormViewModel } from './login-form-view-model'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
  viewModel: LoginFormViewModel;
}

export const LoginFormView = observer(({ viewModel }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={viewModel.email}
        onChangeText={viewModel.setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={viewModel.password}
        onChangeText={viewModel.setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      {viewModel.isPasswordValid ? null : (
        <Text>Password must have at least 8 characters</Text>
      )}

      <Button title="Login" onPress={viewModel.autenticate} />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    minWidth: 250,
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
})
