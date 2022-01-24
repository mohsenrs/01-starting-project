import { Route, Switch } from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
