import { Text, View } from "react-native"
import { styles } from "./styles"
import React from "react"

type SavedValue = {
  current: string
  goal: string
  percentage: number
}

type Props = {
  data: SavedValue
}

export function Progress({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}></Text>

      <View style={styles.status}>
        <Text style={styles.value}>
          {data.current}

          <Text style={styles.goal}> de {data.goal}</Text>
        </Text>

        <Text style={styles.percentage}>{data.percentage.toFixed(0)}%</Text>
      </View>

      <View style={styles.progress}>
        <View style={[styles.currentProgress, { width: `${data.percentage}%` }]} />
      </View>
    </View>
  )
}
