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
export const AboutUsHeadingContainer = styled.div`
  width: 100%;
  height: 260px;
  background: linear-gradient(
    to bottom,
    rgb(210, 180, 140),
    rgb(255, 182, 193),
    rgb(173, 216, 230)
  );
  margin: 0px;
  padding: 40px;
`
export const AboutUsEl = styled.h1`
  color: ${props =>
    props.theme === true
      ? 'darken(rgb(34, 139, 34), 20%);'
      : 'rgb(25, 25, 112)'};
  font-size: 60px;
  font-weight: bold;
`
export const AboutSectionVisionContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: transparent;
  width: 100%;
  padding: 10px;
  /* Initial state (before becoming visible) */
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  /* When scrolled into view */
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const OurVisionImgContainer = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const HomeAboutContent = styled.div`
  width: 60%;
  height: 100%;
  flex-shrink: 1;
  padding: 2%;
  display: flex;
  flex-direction: column;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const AboutUsEll = styled.p`
  width: 300px;
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
    width: 250px;
    font-size: 16px;
    font-weight: 600;
    padding: 6px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
    font-size: 14px;
    border-radius: 20px;
    padding: 4px;
  }
`
export const AboutContentHeading = styled.h1`
  color: ${props => (props.theme === true ? '#1c1c1c' : '#ffffff')};
  font-size: 28px;
  font-weight: bold;
  padding: 0;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
`
export const AboutContentEl = styled.p`
  color: #708090;
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Bree-Serif';
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.5;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    line-height: 1.5;
  }
`
export const AboutListItems = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const FarmSpreadContainer = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  margin-top: 6px;
  @media screen and (max-width: 767px) {
    margin-top: 4px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 4px;
  }
`
export const FarmSpreadText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #708090;
  padding: 0px;
  margin: 0px;
  margin-left: 6px;
  align-self: flex-start;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-left: 4px;
    padding: 6px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    /* margin-left: 4px; */
    margin-top: 10px;
  }
`
export const HomeAbtSecKnowMorwBtn = styled.button`
  border: none;
  background-color: ${props =>
    props.theme === true ? 'rgb(34, 139, 34)' : 'rgb(255, 255, 240)'};
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  border-radius: 10px;
  margin-top: 15px;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ff9900;
    transform: scale(1.1);
  }
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 767px) {
    margin-top: 5px;
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 5px;
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
`
export const AboutSectionJourneyContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: transparent;
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  /* Initial state (before becoming visible) */
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
)`
export const JouneryImg = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 30px;
  aling-self: center;
  margin: auto;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 90%;
  }
`
export const AboutUsElll = styled.p`
  width: 200px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #708090;
  border: 1px solid #c7dcfb !important;
  border-radius: 40px;
  padding: 8px;
  margin-top: 10px;
  margin-left: 0px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    padding: 6px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 180px;
    font-size: 14px;
    border-radius: 20px;
    padding: 4px;
  }
`
export const AboutSectionValuesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex: 1;
`
export const AboutSecOurValuesText = styled.p`
  width: 250px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #708090;
  border: 1px solid #c7dcfb !important;
  border-radius: 40px;
  padding: 8px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 160px;
    font-size: 10px;
    border-radius: 20px;
    padding: 6px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 150px;
    font-size: 12px;
    border-radius: 20px;
    padding: 6px;
  }
`
export const ValuesListContainer = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* Initial state (before becoming visible) */
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  /* When scrolled into view */
  &.visible {
    opacity: 1;
    transform: translateY(0);
    }
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const EachValueContainer = styled.li`
  width: 30%;
  height: 500px;
  display: flex;
  margin: 10px;
  flex-direction: column;
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
    transform: scale(1.05);
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 400px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
    margin: 8px;
    height: 550px;
  }
`
export const ValueCardHeaderContainer = styled.div`
  display: flex;
  width: 100%;
`
export const EachValueHeading = styled.h1`
  color: #0b5136l;
  font-size: 28px;
  margin-left: 10px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }
`
export const ValueContentText = styled.p`
  color: #708090;
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Bree Serif';
  font-weight: 400;
  height: 70%;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
    height: 60%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;
    line-height: 1.5;
    height: 60%;
  }
`
export const ReadMoreBtn = styled.button`
  border: none;
  background-color: ${props =>
    props.theme === true ? 'rgb(34, 139, 34)' : 'rgb(255, 255, 240)'};
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  border-radius: 10px;
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  padding: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ff9900;
    transform: scale(1.1);
  }
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 767px) {
    margin-top: 5px;
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 5px;
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`
