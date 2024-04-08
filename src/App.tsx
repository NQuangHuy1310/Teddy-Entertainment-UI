import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { route } from './models/common'
import HomeLayout from './layouts/HomeLayout'
import { useEffect } from 'react'
import { backToTop } from './utils/common'

function App() {
  useEffect(() => {
    backToTop()
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: route, index: number) => {
            let Layout: React.ComponentType<any> = HomeLayout
            if (route.layout) {
              Layout = route.layout as React.ComponentType<any>
            }
            const Page = route.element

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
