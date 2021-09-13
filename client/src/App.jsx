import "./App.css"
import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home"
import About from "./screens/About/About"
import JamDetail from "./screens/JamDetail/JamDetail"
import JamForm from "./screens/JamForm/JamForm"
import Jams from "./screens/Jams/Jams"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Home user={user}/>
      </Route>
      <Route exact path="/jams">
        <Jams user={user}/>
      </Route>
      <Route exact path="/jams/new">
        <JamForm user={user}/>
      </Route>
      <Route exact path="/jams/:id">
        <JamDetail user={user}/>
      </Route>
      <Route exact path="/jams/:id/edit">
        <JamForm user={user}/>
      </Route>
      <Route path="/signup">
        <SignUp user={user} setUser={setUser}/>
      </Route>
      <Route path="/signin">
        <SignIn user={user} setUser={setUser}/>
      </Route>
      <Route path="/about">
        <About user={user}/>
      </Route>
    </Switch>
  )
}

export default App