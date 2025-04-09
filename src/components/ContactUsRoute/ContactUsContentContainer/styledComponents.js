import {styled} from 'styled-components'

export const HomeBottomBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  height: 100%;
  flex: 1;
  overflow-y: auto;
`
export const DisplayNavItems = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.theme === true
      ? 'rgb(34, 139, 34)'
      : 'rgb(255, 255, 240)'}; /* Semi-transparent version of #2C3E50 */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
export const NavItemListLg = styled.button`
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: start;
`
export const LiveStockHeroSection = styled.div`
  width: 100%;
  min-height: 380px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    url('https://res.cloudinary.com/dikncs8sp/image/upload/v1744105286/pexels-kailashkumarphotography-693776_mpxk6q.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    min-height: 250px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const LiveStockHeroSectionHeader = styled.h1`
  color: #092a49;
  font-family: 'sans-serif';
  font-weight: 700;
  font-size: 44px;
  margin-left: 40px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 36px;
  }
`
export const ContactUsContent = styled.ul`
  display: flex;
  flex: 1;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  padding: 6%;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const ContactUsSectionAddressPage = styled.li`
  width: 30%;
  height: 300px;
  display: flex;
  margin: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  background: #d9e8fc;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgb(34, 139, 34) !important;
    transform: scale(1.1);
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
    margin: auto;
    margin-top: 8px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
    margin: 8px;
    height: 300px;
  }
`
export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  justify-content: center;
`
export const AddressText = styled.h1`
  font-size: 18px;
  color: #1b2c51;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;
  }
`
export const AddressLocation = styled.p`
  font-size: 18px;
  color: #1b2c51 !important;
  font-family: 'Roboto';
  font-weight: 700;
  word-wrap: break-word;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`
export const OrdersContainer = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4%;
  margin: auto;
  margin-bottom: 4%;

  background: #d9e8fc;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
`
export const OrdersText = styled.p`
  color: #1b2c51;
  font-size: 32px;
  font-weight: 700;
  font-family: 'Roboto';
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`
