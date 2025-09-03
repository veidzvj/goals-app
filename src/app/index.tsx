import { View } from "react-native"
import { HomeHeader } from "@/components/HomeHeader"
import { Goal } from "@/components/Goal"

const summary = {
  total: "R$ 2,680.00",
  input: { label: 'Entradas', value: 'R$ 6,184.90' },
  output: { label: 'Saídas', value: '- R$ 883.65' }
}

const goals = [{
  name: 'Apple Watch',
  current: '580,00',
  goal: '1.790,00',
  percentage: '50%',
}]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <Goal data={goals[0]} />
    </View>
  )
}
