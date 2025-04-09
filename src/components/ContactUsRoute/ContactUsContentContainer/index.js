import {Link} from 'react-router-dom'
import {FaLocationDot} from 'react-icons/fa6'
import {IoCallOutline} from 'react-icons/io5'
import {IoMdMail} from 'react-icons/io'
import Footer from '../../Footer'
import ThemeContext from '../../../context/ThemeContext'
import {
  HomeBottomBgContainer,
  DisplayNavItems,
  NavItemListLg,
  LiveStockHeroSection,
  LiveStockHeroSectionHeader,
  ContactUsContent,
  ContactUsSectionAddressPage,
  AddressContent,
  AddressText,
  AddressLocation,
  OrdersContainer,
  OrdersText,
} from './styledComponents'

const ContactUsContentContainer = props => {
  const {menuStatus, onClickMenu} = props

  const onClickNavItem = () => {
    onClickMenu()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <HomeBottomBgContainer>
            {menuStatus === true ? (
              <DisplayNavItems theme={isLightTheme}>
                <Link to="/" style={{textDecoration: 'none', height: '25%'}}>
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    Home
                  </NavItemListLg>
                </Link>
                <Link
                  to="/about"
                  style={{textDecoration: 'none', height: '25%'}}
                >
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    About
                  </NavItemListLg>
                </Link>
                <Link
                  to="/live-stock"
                  style={{textDecoration: 'none', height: '25%'}}
                >
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    LiveStock
                  </NavItemListLg>
                </Link>
                <Link
                  to="/contactUs"
                  style={{textDecoration: 'none', height: '25%'}}
                >
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    ContactUs
                  </NavItemListLg>
                </Link>
              </DisplayNavItems>
            ) : null}
            <LiveStockHeroSection>
              <LiveStockHeroSectionHeader>
                Contact Us
              </LiveStockHeroSectionHeader>
            </LiveStockHeroSection>
            <ContactUsContent>
              <ContactUsSectionAddressPage>
                <a
                  href="https://maps.app.goo.gl/sitDuWr9nmYSJvaw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <FaLocationDot
                    style={{
                      color: 'rgb(34, 139, 34)',
                      width: '30px',
                      height: '30px',
                      margin: 'auto',
                    }}
                  />
                  <AddressContent>
                    <AddressText>Address</AddressText>
                    <AddressLocation>
                      Gadwal, Jogulamba Gadwal Dist, Telangana, India.
                    </AddressLocation>
                  </AddressContent>
                </a>
              </ContactUsSectionAddressPage>
              <ContactUsSectionAddressPage>
                <a
                  href="tel:+918341278008"
                  style={{
                    textDecoration: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IoCallOutline
                    style={{
                      color: 'rgb(34, 139, 34)',
                      width: '30px',
                      height: '30px',
                      margin: 'auto',
                    }}
                  />
                  <AddressContent>
                    <AddressText>Call Us Now</AddressText>
                    <AddressLocation>91 8341278008</AddressLocation>
                  </AddressContent>
                </a>
              </ContactUsSectionAddressPage>
              <ContactUsSectionAddressPage>
                <a
                  href="mailto:jyothsna0329@gmail.com"
                  style={{
                    textDecoration: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IoMdMail
                    style={{
                      color: 'rgb(34, 139, 34)',
                      width: '30px',
                      height: '30px',
                      margin: 'auto',
                    }}
                  />
                  <AddressContent>
                    <AddressText>Mail Us Now</AddressText>
                    <AddressLocation>xxxxxxxxxxxx@gmail.com</AddressLocation>
                  </AddressContent>
                </a>
              </ContactUsSectionAddressPage>
            </ContactUsContent>
            <OrdersContainer>
              <OrdersText>
                Currently accepting orders via CALLS ONLY. Call now to order!
              </OrdersText>
            </OrdersContainer>
            <Footer />
          </HomeBottomBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ContactUsContentContainer
