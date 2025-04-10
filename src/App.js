import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import AboutRoute from './components/AboutRoute'
import LiveStockRoute from './components/LiveStockRoute'
import ContactUsRoute from './components/ContactUsRoute'
import ThemeContext from './context/ThemeContext'
import './App.css'
/* "homepage": "https://jyothsnachinchukala.github.io/FarmsWebApp", */

class App extends Component {
  state = {isLightTheme: true}

  onChangeTheme = () => {
    const {isLightTheme} = this.state
    this.setState({isLightTheme: !isLightTheme})
  }

  render() {
    const {isLightTheme} = this.state
    return (
      <ThemeContext.Provider
        /* eslint-disable react/jsx-no-constructed-context-values */
        value={{isLightTheme, onChangeTheme: this.onChangeTheme}}
        /* eslint-enable react/jsx-no-constructed-context-values */
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/about" component={AboutRoute} />
          <Route exact path="/live-stock" component={LiveStockRoute} />
          <Route exact path="/contactUs" component={ContactUsRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
