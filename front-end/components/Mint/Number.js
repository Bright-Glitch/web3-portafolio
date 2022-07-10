import {React, useContext} from 'react'
import { DappContext } from '../../context/DappContext'
import styles from '../../styles/mint.module.css'
import Image from 'next/image'
import right from '../../public/right.png'
import left from '../../public/left.png'

function number() {
    
    const { number, setNumber } = useContext(DappContext);

    const handleInc = () => {
        setNumber(number + 1 <= 15 ? number + 1 : 15 )
    }

    const handleDec = () => {
        setNumber(number - 1 > 1 ? number - 1 : 1 )
    }


  return (
    <div className={styles.counter} >
          <button className={styles.arrows} onClick={handleDec} >
            <Image src={left} height={37} width={37} quality={100}  />
          </button>
          <div className={styles.numbers} >
            <h1> {number} </h1>
          </div>
          <button className={styles.arrows} onClick={handleInc} >
            <Image src={right} height={37} width={37} quality={100}  />
          </button>
    </div> 
  )
}

export default number