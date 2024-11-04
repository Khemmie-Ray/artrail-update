import { configWeb3Modal } from "./connection"
import AllRoutes from "./config/AllRoutes"

configWeb3Modal()


function App() {

  return (
    <div>
       <AllRoutes/>
  </div>
  )
}

export default App