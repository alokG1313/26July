import React, { useContext } from 'react'
import themeContext from '../context/themeContext'

const ThemeChild = () => {
    const theme = useContext(themeContext);
  return (
    <div>
      select theme is : {theme};
    </div>
  )
}

export default ThemeChild
