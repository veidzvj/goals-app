import { colors, fontFamily } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    gap: 16,
    paddingTop: 16,
    paddingBottom: 72
  },
  title: {
    marginTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    color: colors.black,
    fontSize: 18,
    fontFamily: fontFamily.medium
  },
  empty: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.regular
  }
})
