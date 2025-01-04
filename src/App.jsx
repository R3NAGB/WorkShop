import AppRoutes from "./routes/AppRoutes"
// eslint-disable-next-line no-unused-vars
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <>
        <AppRoutes />
        <Toaster />
    </>
  )
}

export default App

