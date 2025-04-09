import {styled} from 'styled-components'

export const NavBarBgContainer = styled.nav`
  width: 100%;
  height: 15%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position="fixed";
  background: ${props =>
    props.theme === true
      ? 'rgb(34, 139, 34)'
      : 'rgb(255, 255, 240)'}; /* Semi-transparent version of #2C3E50 */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`
export const LogoAndNameContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`
export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media screen and (min-width: 678px) {
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }
`
export const CompanyName = styled.h1`
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  margin-left: 6px;
  @media screen and (max-width: 678px) {
    display: none;
  }
  /* iPad Mini */
  @media (max-width: 1024px) and (min-width: 768px) {
    /* Styles for iPad Mini */
    font-size: 26px;
    line-height: 1;
  }

  /* iPad Air & iPad Pro 11" */
  @media (max-width: 1194px) and (min-width: 820px) {
    /* Styles for iPad Air & iPad Pro 11" */
    font-size: 28px;
    line-height: 1;
  }
`
export const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 30%;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
export const ThemeImgButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 40%;
  height: 100%;
`
export const ThemeImgButtonLg = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const NavItemsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: flex-end;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`
export const NavItemsLg = styled.ul`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const NavItemList = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: ${props => (props.theme === true ? '#ffffff' : '#191970')};
  font-size: 24px;
  font-weight: 600;
  &:hover {
    color: #ff9900;
    transform: scale(1.1);
  }
  @media (max-width: 1366px) {
    font-size: 20px;
  }
`
