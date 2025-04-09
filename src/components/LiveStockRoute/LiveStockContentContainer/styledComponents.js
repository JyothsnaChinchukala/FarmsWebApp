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
export const LiveStockTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4%;
  background-color: transparent;
`
export const LiveStockQuote = styled.h1`
  color: ${props => (props.theme === true ? '#0b5136' : '#ffffff')};
  font-size: 32px;
  font-family: 'sans-serif';
  text-align: center;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 26px;
  }
`
export const LiveStockIntroductionContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: transparent;
  width: 100%;
  padding: 20px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const LiveStockImgContainer = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const LiveStockImg = styled.img`
  width: 90%;
  height: 400px;
  border-radius: 30px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    margin: auto;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 400px;
    width: 100%;
  }
`
export const LiveStockIntroContent = styled.div`
  width: 60%;
  flex: 1;
  padding-left: 3%;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const OurCompnyText = styled.p`
  width: 200px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #708090;
  border: 1px solid #c7dcfb !important;
  border-radius: 40px;
  padding: 8px;
  margin-left: 0px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 130px;
    font-size: 12px;
    font-weight: 600;
    padding: 6px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 150px;
    font-size: 14px;
    border-radius: 20px;
    padding: 4px;
  }
`
export const LiveStockIntroText = styled.p`
  color: #708090;
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Lora', serif;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
    line-height: 1.5;
  }
`
export const LiveStockEachPoint = styled.p`
  color: #708090;
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Lora', serif;
  /* Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
  }
`
export const SpanEl = styled.span`
  color: ${props => (props.theme === true ? '#333' : '#ffffff')};
  font-size: 18px;
  font-weight: 600;
`
export const LiveStockPointsContainer = styled.div`
  padding: 0 5% 0 5%;
  width: 100%;
  flex: 1;
`
