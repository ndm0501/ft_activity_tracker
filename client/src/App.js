import React, {useEffect} from "react"
import "./App.css"
import {Home} from "./routes"
import {inject, observer} from "mobx-react"
import {BrowserRouter, Route} from "react-router-dom"

function App({store}) {
  const {fetchMembers} = store
  useEffect(fetchMembers, [])
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

export default inject("store")(observer(App))
