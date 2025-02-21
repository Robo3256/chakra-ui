import { Global, ThemeProvider } from "@emotion/react"
import { theme as defaultTheme } from "@chakra-ui/theme"
import styled from "@emotion/styled"
import { css, resolveStyleConfig, toCSSVar } from "."
import { recipe } from "../tests/theme"

export default {
  title: "System / Style Config",
}

const Box = styled("div")((props: any) => css(props.css)(props.theme))

export const ResponsiveButton = () => {
  const theme = toCSSVar(defaultTheme)
  const styles = recipe({
    theme,
    variant: ["solid", "outline", "link"],
    size: ["sm", "md", "lg"],
  })
  return (
    <ThemeProvider theme={theme}>
      <Global styles={(theme: any) => ({ ":root": theme.__cssVars })} />
      <Box as="button" css={styles}>
        Button
      </Box>
    </ThemeProvider>
  )
}

export const MultipartAlert = () => {
  const props = {
    variant: ["left-accent", "top-accent", "subtle"],
    colorScheme: "red",
    theme: defaultTheme,
  }

  const alertTheme = defaultTheme.components.Alert
  //@ts-ignore
  const styles = resolveStyleConfig(alertTheme)(props)

  return (
    <ThemeProvider theme={defaultTheme}>
      <pre style={{ fontSize: "small" }}>{JSON.stringify(styles, null, 2)}</pre>
      <Global styles={(theme: any) => ({ ":root": theme.__cssVars })} />
      <Box css={styles.container}>
        <Box css={styles.title}>Welcome</Box>
      </Box>
    </ThemeProvider>
  )
}
