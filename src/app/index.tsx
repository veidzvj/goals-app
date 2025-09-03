import { View } from "react-native"
import { HomeHeader } from "@/components/HomeHeader"
import { Goal } from "@/components/Goal"
import { List } from "@/components/List"

const summary = {
  total: "R$ 2,680.00",
  input: { label: 'Entradas', value: 'R$ 6,184.90' },
  output: { label: 'Saídas', value: '- R$ 883.65' }
}

const goals = [{
  id: '1',
  name: 'Apple Watch',
  current: '580,00',
  goal: '1.790,00',
  percentage: '50%',
}, {
  id: '2',
  name: 'Cadeira ergonômica',
  current: '900,00',
  goal: '1.200,00',
  percentage: '75%',
}, {
  id: '3',
  name: 'Viagem',
  current: '1.000,00',
  goal: '3.000,00',
  percentage: '33.3%',
}]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List title="Metas" data={goals} renderItem={({ item }) => <Goal data={item} />} keyExtractor={(item) => item.id} emptyMessage="Nenhuma meta criada." containerStyle={{ paddingHorizontal: 24 }} />
    </View>
  )
}
