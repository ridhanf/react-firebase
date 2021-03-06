import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Uploader from './pages/Uploader'
import PostForm from './pages/Create'
import GetData from './pages/Read'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/file-upload" component={Uploader} />
      <Route exact path="/create-post" component={PostForm} />
      <Route exact path="/get-data" component={GetData} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router