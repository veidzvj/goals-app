import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles"

export type GoalProps = {
  id?: string
  name: string
  percentage: string
  current: string
  goal: string
}

type Props = TouchableOpacityProps & {
  data: GoalProps
}

export function Goal({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>

        <Text style={styles.status}>{data.percentage} • {data.current} de {data.goal}</Text>
      </View>

      <MaterialIcons name="chevron-right" size={20} />
    </TouchableOpacity>
  )
}
