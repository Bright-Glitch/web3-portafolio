import Head from 'next/head'
import {React, useContext} from 'react'
import { DappContext } from '../context/DappContext'
import BgSecond from '../components/BG-image/BgSecond'

function stake() {
  const { isConnected } = useContext(DappContext);

  return (
    <>
    <Head>
      <title>Web3 | Stake</title>
    </Head>
    <BgSecond/>
    {/* DON'T FORGET TO APPROVE THE ALLOWANCE OF THE TOKEN!! */}
    </>
  )
}

export default stake