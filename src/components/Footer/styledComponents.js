import {styled} from 'styled-components'

export const FooterBgContainer = styled.div`
  width: 100%;
  flex: 1;
  background-color: #1b2c51;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const FooterAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 30%;
  padding-left: 20px;
  padding-right: 20px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    width: 80%;
    height: 150px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`
export const AddressHeader = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }
`
export const AddressContentContainer = styled.div`
  display: flex;
  width: 100%;
  color: #ffffff;
  padding-top: 12px;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    padding-top: 6px;
  }
`
export const AddressContent = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: auto;
  text-align: start;
  margin-left: 8px;
  color: #ffffff;
  /* All Extra Small Devices */
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
  /* All Ipads */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
`
export const EachLinkBtn = styled(AddressContentContainer)`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: rgb(34, 139, 34);
  }
`
export const VisitUsText = styled(AddressContent)`
  margin: none;
  margin-top: 0;
  margin-left: 0;
`
