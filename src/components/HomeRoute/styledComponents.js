import {styled, keyframes} from 'styled-components'

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
export const HomeBgContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#eceff4' : '#111827')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 1s ease-in-out;
`
export const BottomContainer = styled.div`
  background-color: blue;
`
