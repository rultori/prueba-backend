import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from './themes'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  )
}

export default App
