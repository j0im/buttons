import styles from './styles.module.scss'
import { useLayoutEffect, useEffect } from 'react'

const CssMouseEffect = () => {
  const [showMouse, setShowMouse] = useState(false)
  const filledArray = new Array(10)
    .fill(null)
    .map((_, index) => Array(10).fill(<div className={styles.cell}></div>))

  useEffect(() => {
    const ele = document.getElementById('css-mouse-effect')

    if (ele) {
      const rect = ele.getBoundingClientRect()
      ele.addEventListener('mousemove', (e) => {
        // Get the bounding rectangle of target

        // Mouse position
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ele.style.setProperty('--mouse-x', x + 'px')
        ele.style.setProperty('--mouse-y', y + 'px')
      })
      return ele.removeEventListener('mousemove', (e) => {
        // Get the bounding rectangle of target
        // Mouse position
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ele.style.setProperty('--mouse-x', x + 'px')
        ele.style.setProperty('--mouse-y', y + 'px')
      })
    }
  }, [filledArray])

  return (
    <div
      className={styles.container}
      id={'css-mouse-effect'}
      style={
        {
          '--rows': 10,
          '--cols': filledArray.length ?? 10,
        } as React.CSSProperties
      }
    >
      {filledArray.map((item, index) => item)}
      <div className={styles.content}>
        <div className={styles.mousePointer}>Pure CSS shadow play</div>
      </div>
    </div>
  )
}

export { CssMouseEffect }
