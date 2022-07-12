import {React, useContext} from 'react'
import { DappContext } from '../context/DappContext'
import styles from '../styles/mint.module.css'
import Image from 'next/image'
import coin from '../public/coin-img.png'
import Buttons from './Mint/Buttons'
import Connect from './Connect'
import Number from './mint/Number'
import info from '../public/info-1.png'
import ReactTooltip from 'react-tooltip'

function Mint() {

  const { isConnected } = useContext(DappContext);

  const information = (

  <div className={styles.info} data-tip data-for='infoTooltop' >

    <Image src={info} height={27} width={27} quality={100} />

    <ReactTooltip id='infoTooltop'place='right' type='info' effect='solid' className={styles.toolTip} >
      Token Name: Future <br />
      Mint: Only 15 Token per Address <br />
      Burn: Unlimited <br />
      Max. Supply: 700,000
    </ReactTooltip>

  </div>
  
  )

  return (
    <>
    <div className={isConnected ? styles.card: styles.cardStart }>
        
        <div className={styles.container} >
          
          <div className={styles.coin} >
          <Image src={coin} height={160} width={160} quality={100}  />
          </div>

          <div className={styles.btnContainer} >

            { isConnected ? (<Buttons/>) : (<Connect/>) }
              
          </div>

          { isConnected ? (<Number />) : null }

      </div>

      { isConnected ? information : null }

      
    </div>
    </>
  )
}

export default Mint