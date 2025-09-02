import { router } from "expo-router"
import { Button, Text, View } from "react-native"

export default function Goal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <Text>Goal</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}
