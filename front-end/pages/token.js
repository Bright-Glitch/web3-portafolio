import Head from 'next/head'
import {React, useContext} from 'react'
import { DappContext } from '../context/DappContext'
import Mint from '../components/Mint'
import styles from '../styles/mint.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast, Toaster } from 'react-hot-toast'
import BgSecond from '../components/BG-image/BgSecond'

function Token() {
  
  const { isConnected } = useContext(DappContext);
  
  const info = (<p className={styles.p} >Chain: Goerli</p>)
  
  const copy = (
  <CopyToClipboard text='0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264' >
    <button className={styles.copy} onClick={ ()=> toast.success("Address Copied!", { style: { fontSize : '12px' } } )  } >Token Address</button>
  </CopyToClipboard>
  )

  return (
    <>
    <Head>
      <title>Web3 | Token</title>
    </Head>

    <h1 className={styles.h1} >Mint your Future</h1>

    <Mint/>

    { isConnected ? info : null}

    { isConnected ? copy : null}

    <Toaster containerStyle={{top: 820 }} />

    <BgSecond/>
    </>
  )
}

export default Token