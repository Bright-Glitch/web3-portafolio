import Head from 'next/head'
import { React, useContext, useEffect } from 'react'
import { DappContext } from '../context/DappContext'
import Bgimg from '../components/BG-image/Bgimg'
import Authorization from '../components/staking/Authorization'
import Connect from '../components/Connect'
import styles from '../styles/stake.module.css'
import Image from 'next/image'
import coin from '../public/coin-img.png'
import GetReward from '../components/staking/GetReward'
import Staking from '../components/staking/Staking'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast, Toaster } from 'react-hot-toast'

function stake() {

  const { isConnected, isAuthorized, authCall } = useContext(DappContext);

  useEffect(() => {

    if(isConnected){
      authCall()
    }

  }, [])

  const copy = (
    <CopyToClipboard text='0x97F7BB30AFD27b0cc116491c71378678aC9cafC4' >
      <button className={styles.copy} onClick={ ()=> toast.success("Address Copied!", { style: { fontSize : '12px' } } )  } >Reward Address</button>
    </CopyToClipboard>
    )
  
  
  return (
    <>
    <Head>
      <title>Web3 | Stake</title>
    </Head>

    <h1 className={styles.h1} >Invest in your Future</h1>

    <p className={styles.description} >To avoid overflow, please withdraw the staked tokens after testing, thank you!<br/>
    Reward Rate is 1 Token Per Second
    </p>

    <div className={styles.container}>

      <div className={ isAuthorized ? styles.card: styles.cardNone }>
        <Staking/>
      </div>

      <div className={ isAuthorized ? styles.card: styles.cardStart }>
                 
        <div className={isAuthorized ? styles.coinNone  : styles.coin } >
          <Image src={coin} height={160} width={160} quality={100} />
        </div>

        { isConnected ? (<Authorization/>) : (<Connect/>) }
          
      </div>

      <div className={ isAuthorized ? styles.card: styles.cardNone }>
        <GetReward/>
      </div>

    </div>
    { isConnected ? copy : null}
    <Toaster containerStyle={{top: 940 }} />

    <Bgimg/>
    </>
  )
}

export default stake