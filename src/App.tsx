import React, { useState } from 'react'
import styles from './App.module.scss'
import icons from './icons.json'
import { CoolButton, SlidingPopup } from './components'
import './fonts/RespaceRegular.otf'
import { CssMouseEffect } from './components/CssMouseEffect'
// import round from './images/roundOutline.svg'
// import scifi from './icons/ski.png'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handleSelect = (value: any) => {
    setSelectedOption(value)
  }

  const handleOpen = (isOpen: boolean): void => {
    setShowPopup(isOpen)
  }

  return (
    <div className={styles.container}>
      <div className={styles.menuBar}>
        <div className={styles.menuText}>Favorites</div>
        {icons.files.map((icon, index) => (
          <CoolButton
            key={index}
            text={icon.path}
            id={index}
            logo={`/icons/${icon.path}`}
            selected={selectedOption === index}
            onClick={(value: any) => handleSelect(value)}
          />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.mouseEffect}>
          <CssMouseEffect />
        </div>
      </div>
      {/* <div onClick={() => handleOpen(!showPopup)}>Popup</div> */}
      <SlidingPopup
        heading={`Save Changes?`}
        isOpen={showPopup}
        onClick={(value: boolean) => handleOpen(value)}
      >
        <div>Save or discard changes before exiting?</div>
      </SlidingPopup>
    </div>
  )
}

export default App
