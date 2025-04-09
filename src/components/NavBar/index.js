import {Link} from 'react-router-dom'
import {MdOutlineDarkMode, MdLightMode} from 'react-icons/md'
import {IoMenu} from 'react-icons/io5'
import {
  NavBarBgContainer,
  LogoImg,
  CompanyName,
  LogoAndNameContainer,
  MenuBarContainer,
  ThemeImgButton,
  NavItemsLg,
  NavItemList,
  NavItemsContainer,
  ThemeImgButtonLg,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NavBar = props => {
  const {onClickMenu} = props

  const onClickingMenuBar = () => {
    onClickMenu()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme, onChangeTheme} = value
        const onClickThemeBtn = () => {
          onChangeTheme()
        }
        return (
          <NavBarBgContainer theme={isLightTheme}>
            <LogoAndNameContainer>
              <Link to="/">
                <LogoImg
                  src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743589944/Untitled_1_optimized_10000_rkpx6u.png"
                  alt="Logo Img"
                />
              </Link>
              <CompanyName theme={isLightTheme}>
                Sathvick Sheep & Goat Farms
              </CompanyName>
            </LogoAndNameContainer>
            <MenuBarContainer>
              <ThemeImgButton type="button" onClick={() => onClickThemeBtn()}>
                {isLightTheme === true ? (
                  <MdOutlineDarkMode
                    style={{height: '40px', width: '40px', color: '#ffffff'}}
                  />
                ) : (
                  <MdLightMode
                    style={{height: '40px', width: '40px', color: '#191970'}}
                  />
                )}
              </ThemeImgButton>
              <ThemeImgButton type="button" onClick={() => onClickingMenuBar()}>
                {isLightTheme === true ? (
                  <IoMenu
                    style={{height: '40px', width: '40px', color: '#ffffff'}}
                  />
                ) : (
                  <IoMenu
                    style={{height: '40px', width: '40px', color: '#191970'}}
                  />
                )}
              </ThemeImgButton>
            </MenuBarContainer>
            <NavItemsContainer>
              <NavItemsLg>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <NavItemList theme={isLightTheme}>Home</NavItemList>
                </Link>
                <Link to="/about" style={{textDecoration: 'none'}}>
                  <NavItemList theme={isLightTheme}>About</NavItemList>
                </Link>
                <Link to="/live-stock" style={{textDecoration: 'none'}}>
                  <NavItemList theme={isLightTheme}>LiveStock</NavItemList>
                </Link>
                <Link to="/contactUs" style={{textDecoration: 'none'}}>
                  <NavItemList theme={isLightTheme}>ContactUs</NavItemList>
                </Link>
              </NavItemsLg>
              <ThemeImgButtonLg type="button" onClick={() => onClickThemeBtn()}>
                {isLightTheme === true ? (
                  <MdOutlineDarkMode
                    style={{
                      height: '40px',
                      width: '40px',
                      color: '#ffffff',
                    }}
                  />
                ) : (
                  <MdLightMode
                    style={{
                      height: '40px',
                      width: '40px',
                      color: '#191970',
                    }}
                  />
                )}
              </ThemeImgButtonLg>
            </NavItemsContainer>
          </NavBarBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NavBar
