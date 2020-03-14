import React from 'react'
import Login from './component/screen/Login'
import HomeAdmin from './component/screen/HomeAdmin'
import HomeUser from './component/screen/HomeUser'
import BlogScreen from './component/screen/class/BlogScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import { nameScreen } from './component/screen/TextNameScreen'
class App extends React.Component {

  getChildren() {
    let { id } = useParams()
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/Login" component={Login}>
            {/* <Login /> */}
          </Route>
          <Route path="/Home" component={HomeUser}>
            {/* <HomeUser /> */}
          </Route>
          <Route path="/HomeAdmin" component={HomeAdmin}>
            {/* <HomeAdmin /> */}
          </Route>
          <Route path="/Blog/:id" component={BlogScreen}>
            {/* <HomeAdmin /> */}
          </Route>

        </Router>
      </div>
    )

  }
}
export default App;