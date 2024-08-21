import { observer } from 'mobx-react-lite'
import { CounterViewModel } from './counter-view-model'
import { Button, Text, View } from 'react-native'

interface Props {
  viewModel: CounterViewModel;
}

export const CounterView = observer(({ viewModel }: Props) => {
  return (
    <View>
      <Text>{viewModel.countLabel}</Text>
      <Button title="Click me" onPress={viewModel.increment} />
    </View>
  )
})
