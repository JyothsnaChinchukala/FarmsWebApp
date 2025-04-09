import {Link} from 'react-router-dom'
import {CiLocationOn} from 'react-icons/ci'
import {IoCallOutline} from 'react-icons/io5'
import {IoMdMail} from 'react-icons/io'
import {MdOutlineArrowRight} from 'react-icons/md'
import {
  FooterBgContainer,
  FooterAddressContainer,
  AddressHeader,
  AddressContentContainer,
  AddressContent,
  EachLinkBtn,
  VisitUsText,
} from './styledComponents'

const Footer = () => (
  <FooterBgContainer>
    <FooterAddressContainer>
      <AddressHeader>Address</AddressHeader>
      <AddressContentContainer>
        <CiLocationOn style={{width: '24px', height: '24px'}} />
        <AddressContent>
          Gadwal, Jogulamba Gadwal Dist, Telangana, India.
        </AddressContent>
      </AddressContentContainer>
      <AddressContentContainer>
        <IoCallOutline style={{width: '20px', height: '20px'}} />
        <AddressContent>91 8341278008</AddressContent>
      </AddressContentContainer>
      <AddressContentContainer>
        <IoMdMail style={{width: '20px', height: '20px'}} />
        <AddressContent>xxxxxxxxxxxx@gmail.com</AddressContent>
      </AddressContentContainer>
    </FooterAddressContainer>
    <FooterAddressContainer>
      <AddressHeader>Quick Links</AddressHeader>
      <Link to="/about" style={{textDecoration: 'none', textAlign: 'center'}}>
        <EachLinkBtn as="button" type="button">
          <MdOutlineArrowRight style={{width: '24px', height: '24px'}} />
          <AddressContent>About Us</AddressContent>
        </EachLinkBtn>
      </Link>
      <Link
        to="/live-stock"
        style={{textDecoration: 'none', textAlign: 'center'}}
      >
        <EachLinkBtn as="button" type="button">
          <MdOutlineArrowRight style={{width: '24px', height: '24px'}} />
          <AddressContent>Our LiveStock</AddressContent>
        </EachLinkBtn>
      </Link>
      <Link
        to="/contactUs"
        style={{textDecoration: 'none', textAlign: 'center'}}
      >
        <EachLinkBtn as="button" type="button">
          <MdOutlineArrowRight style={{width: '24px', height: '24px'}} />
          <AddressContent>Contact Us</AddressContent>
        </EachLinkBtn>
      </Link>
    </FooterAddressContainer>
    <FooterAddressContainer>
      <AddressHeader>Sathvick Sheep and Goat Farms</AddressHeader>
      <VisitUsText>Visit us for more insights and live information</VisitUsText>
    </FooterAddressContainer>
  </FooterBgContainer>
)

export default Footer
