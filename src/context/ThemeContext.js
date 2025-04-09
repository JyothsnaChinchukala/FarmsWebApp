import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: '',
  onChangeTheme: () => {},
})

export default ThemeContext
