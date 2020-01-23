import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './stylesheets/main.scss'

import Home from './components/common/Home'
import FilmIndex from './components/films/FilmIndex'
import Navbar from './components/common/Navbar'
import FilmShow from './components/films/FilmShow'
import FilmYear from './components/films/FilmYear'

const App = () => (
  <BrowserRouter>
      <>
      <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/films/:id" component={FilmShow} />
            <Route path="/years" component={FilmYear} />
            <Route path="/films" component={FilmIndex} />
          </Switch>
        </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)