import { NextUIProvider } from '@nextui-org/react'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  )
}

export default App
