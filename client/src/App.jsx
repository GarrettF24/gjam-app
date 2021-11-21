import "./App.css"
import { useEffect, useState } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./screens/Home/Home"
import About from "./screens/About/About"
import JamDetail from "./screens/JamDetail/JamDetail"
import JamForm from "./screens/JamForm/JamForm"
import Jams from "./screens/Jams/Jams"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"
import SignOut from "./screens/SignOut/SignOut"
import Cart from "./screens/Cart/Cart"
import { verifyUser } from "./services/users"
import ProfilePage from "./screens/ProfilePage/ProfilePage"

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
        <Home user={user} />
      </Route>
      <Route exact path="/jams">
        <Jams user={user} />
      </Route>
      <Route exact path="/jams/new">
        {user ? <JamForm user={user} /> : <Redirect to="/signup" />}
      </Route>
      <Route exact path="/jams/:id">
        <JamDetail user={user} />
      </Route>
      <Route exact path="/jams/:id/edit">
        {user ? <JamForm user={user} /> : null}
      </Route>
      <Route path="/signup">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route path="/signin">
        <SignIn user={user} setUser={setUser} />
      </Route>
      <Route path="/signout">
        <SignOut setUser={setUser} />
      </Route>
      <Route path="/about">
        <About user={user} />
      </Route>
      <Route path="/cart">{user ? <Cart user={user} /> : null}</Route>
      <Route path="/profile">{user ? <ProfilePage user={user} /> : null}</Route>
    </Switch>
  )
}

export default App
