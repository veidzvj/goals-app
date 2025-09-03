import { FlatList, FlatListProps, StyleProp, Text, View, ViewStyle } from "react-native"
import { styles } from "./styles"
import { Separator } from "../Separator"
import { colors } from "@/theme"

type Props<T> = FlatListProps<T> & {
  title: string
  emptyMessage?: string
  containerStyle?: StyleProp<ViewStyle>
}

export function List<T>({ title, emptyMessage, containerStyle, data, renderItem, ...rest }: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.listContent}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>{emptyMessage}</Text>
        )}
        {...rest}
      />
    </View>
  )
}
