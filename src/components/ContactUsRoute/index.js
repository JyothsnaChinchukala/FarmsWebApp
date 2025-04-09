import {Component} from 'react'
import {HomeBgContainer} from './styledComponents'
import NavBar from '../NavBar'
import ContactUsContentContainer from './ContactUsContentContainer'
import ThemeContext from '../../context/ThemeContext'

class ContactUsRoute extends Component {
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
              <ContactUsContentContainer
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

export default ContactUsRoute
