import {Component} from 'react'
import {HomeBgContainer} from './styledComponents'
import NavBar from '../NavBar'
import HomeContentContainer from './HomeContentContainer'
import ThemeContext from '../../context/ThemeContext'

class HomeRoute extends Component {
  state = {isMenuOpen: false}

  onClickMenu = () => {
    this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))
  }

  render() {
    const {isMenuOpen} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <HomeBgContainer theme={isLightTheme}>
              <NavBar onClickMenu={this.onClickMenu} />
              <HomeContentContainer
                menuStatus={isMenuOpen}
                onClickMenu={this.onClickMenu}
              />
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
