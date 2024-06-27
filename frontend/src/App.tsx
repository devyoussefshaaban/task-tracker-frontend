import { Route, Routes } from "react-router-dom"
import routes, {IRoute} from './utils/routes'

const App = () => {
  return (
    <>
      <Routes>
        {
          routes.map((route: IRoute) => {
            const {path, Page} = route
            return <Route key={path} path={path} element={<Page />} />
          })
        }
      </Routes>
    </>
  )
}

export default App