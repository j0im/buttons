import { ICoolButton } from "./ICoolButton"
import styles from './styles.module.scss'
import cx from 'classnames'
import round from '../images/roundOutline.svg'

const CoolButton = (props: ICoolButton) => {
  return (
    <button className={cx(styles.container, { [styles.selected]: props.selected })} onClick={() => props.onClick(props.id)} >
      <div className={styles.icon} >
        {/* <div style={{backgroundImage: `url(${props.logo})`}}></div> */}
        <img src={props.logo} placeholder={props.text} alt={props.text} />
              {/* <svg width={'50px'} height={'50px'} viewBox={ '0 0 50 50' } >
          <use href={`${round}#cowTest`} />
      </svg> */}
      </div>
      <div className={cx(styles.actionbar, { [styles.selected]: props.selected })}></div>
    </button>
  )
}

export {CoolButton}