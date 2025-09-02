import { fontFamily } from "@/theme/fontFamily"
import { router } from "expo-router"
import { Button, Text, View } from "react-native"

export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Hello</Text>

      <Button title="Nova Meta" onPress={() => router.navigate('/goal')} />
      <Button title="Transacao" onPress={() => router.navigate('/transaction/1')} />
      <Button title="Progresso" onPress={() => router.navigate('/in-progress/12')} />
    </View>
  )
}
