import React, {useState} from 'react';
import styles from './styles.module.scss'

export const LayoutComponent = () => {
  const [widthBar, setWidthBar] = useState(0)
  const [percent, setPercent] = useState(0)
  const handleProgressBar = () => {
    const random = Math.floor(Math.random() * 101);
    setPercent(random);
    const width = parseInt( (228 * random) / 100)
    setWidthBar(width);
  }

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.border}>
          <div className={styles['border-container']}>
            <div className={styles.text}>
              <span className={styles.study}>
                Обучение по продажам
              </span>
              <span className={styles.sales}>
                Вы сделали 13 продаж и заработали:
              </span>
              <span className={styles.money}>
                $ 2 000
              </span>
            </div>
            <div className={styles['month-plan']}>
              <span className={styles['month-text']}><span>Месячный</span> план выполнен на</span>
              <div  className={styles['progress-bar']}>
                <span className={styles.bar} style={{width: `${widthBar}px`}} />
                <span className={styles['progress-text']}>{percent}%</span>
              </div>
              <div className={styles.button}>
                <button onClick={handleProgressBar}>  <span>Продолжить</span></button>
                <span>Осталось 8 дней</span>
              </div>
            </div>
          </div>
        </div>
        <span className={styles.div}>
          <div className={styles.green}>
            25
          </div>
        </span>
      </div>
      <div className={styles.shadow}>

      </div>
    </div>
  )
};
