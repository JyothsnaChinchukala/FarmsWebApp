import {styled, keyframes} from 'styled-components'

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
export const SlideContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`
export const CorousalImgContainer = styled.div`
  width: 100% !important;
`
export const CorousalImg = styled.img`
  width: 100%;
  height: 400px; /* 🔥 Ensures all slides have the same height */
  object-fit: fill;
  display: block;
  margin: auto;
  @media screen and (min-width: 1024px) {
    width: 70%;
    height: 500px;
  }
`
// Keyframes for fade-in and slide-up animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px); /* Starts 30px below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Moves to normal position */
  }
`
export const HomeHeroSection = styled.div`
  /* All Laptops */
  width: 100%;
  height: 250px;
  background-color: ${props =>
    props.theme === true ? 'rgb(34, 139, 34)' : 'rgb(255, 255, 240)'};
  backdrop-filter: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  margin-top: 16px;
  padding: 20px;
  animation: ${fadeInUp} 1s ease-in-out;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    height: 200px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 250px;
  }
`
export const HomeHeroSecMainHeading = styled.h1`
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  font-size: 34px;
  font-weight: bold;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 30px;
  }
`
export const HomeHeroSecSubHeading = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  font-size: 26px;
  font-weight: 600;
  margin-top: 0px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
`
export const HomeHeroSecContactUsBtn = styled.button`
  border: none;
  background-color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  color: ${props => (props.theme === true ? 'rgb(34, 139, 34)' : '#ffffff')};
  border-radius: 10px;
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
    width: 100px;
    height: 30px;
    font-size: 10px;
  }
  /* All Ipads */
`
export const HomeAboutSection = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  padding: 16px;
  flex: 1;
  animation: ${fadeInUp} 1s ease-in-out;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const HomeAboutImgContainer = styled.div`
  width: 40%;
  transform: translateX(30px);
  transition: all 1s ease-in-out;
  align-self: flex-start;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    display: none;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 450px;
  }
`
export const HomeAboutImg = styled.img`
  width: 90%;
  height: 500px;
  border-radius: 30px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    display: none;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 100%;
  }
`
export const HomeAboutContent = styled.div`
  width: 60%;
  height: 100%;
  flex-shrink: 1;
  padding: 10px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const AboutUsEl = styled.p`
  width: 130px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #708090;
  border: 1px solid #c7dcfb !important;
  border-radius: 40px;
  padding: 8px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 100px;
    font-size: 18px;
    font-weight: 600;
    padding: 6px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80px;
    font-size: 12px;
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
  font-size: 16px;
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.5;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
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
    font-size: 10px;
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
export const HomeLiveStockSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex: 1;
`
export const HomeLiveStockTextEl = styled.p`
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
export const BreedsListContainer = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const EachBreedContainer = styled.li`
  width: 30%;
  height: 600px;
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

  /* Initial state (before becoming visible) */
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  /* Hover effect */
  &:hover {
    transform: scale(1.06);
  }

  /* When scrolled into view */
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 80%;
    height: 400px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
    margin: 8px;
    height: 550px;
  }
`
export const BreedImg = styled.img`
  width: 90%;
  height: 70%;
  border-radius: 16px;
  transition: all 2s ease-in-out;
  &:hover {
    transform: rotateY(360deg);
  }
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 70%;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const BreedNameEl = styled.h1`
  color: ${props => (props.theme === true ? 'rgb(34, 139, 34)' : '191970')};
  font-size: 26px;
  font-weight: bold;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
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
export const BreadDescription = styled.p`
  color: #708090;
  font-size: 16px;
  padding-top: 0;
  margin-top: 0;
  font-weight: 600;
  text-align: center;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 9px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`
