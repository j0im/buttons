import styles from './styles.module.scss'
import { ReactComponent as GooSvg } from './goo.svg'
import { useState } from 'react'
import cx from 'classnames'

const Goo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const listOfItems = [
    'Click',
    'me',
    'maybe',
    'baby',
    'Click',
    'me',
    'maybe',
    'baby',
  ]

  const renderItem = (n: number) => {
    if (listOfItems.length <= n) return
    return (
      <div
        className={cx(styles.square, { [styles.show]: isOpen || n === 0 })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{listOfItems[n]}</div>
        {renderItem(n + 1)}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <GooSvg></GooSvg>
      <div className={styles.blobs}>{renderItem(0)}</div>
    </div>
  )
}

export { Goo }
