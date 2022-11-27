import { IPopup } from './IPopup'
import styles from './styles.module.scss'
import cx from 'classnames'
import { useState, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SlidingPopup = (props: IPopup) => {
  // const [isOpen, setIsOpen] = useState(props.isOpen)

  const handleClick = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ): void => {
    e.stopPropagation()
  }

  return (
    <div
      className={cx(styles.container, { [styles.open]: props.isOpen })}
      onClick={() => props.onClick(false)}
    >
      <motion.div
        layout
        transition={{ duration: 0.25 }}
        className={cx(styles.contentArea, { [styles.open]: props.isOpen })}
        onClick={(e) => handleClick(e)}
      >
        <h1 className={cx(styles.header)}>{props.heading}</h1>
        <div className={cx(styles.main)}>{props.children}</div>
        <div className={cx(styles.footer)}>
          <button
            className={cx(styles.button)}
            onClick={() => props.onClick(false)}
          >
            close
          </button>
          <button className={cx(styles.button)}>Save</button>
        </div>
      </motion.div>
    </div>
  )
}

export { SlidingPopup }
