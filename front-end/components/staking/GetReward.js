import {React, useContext } from 'react'
import { DappContext } from '../../context/DappContext'
import styles from '../../styles/stake.module.css'
import StakingJ from '../../abi/StakingFT.json'
import { ethers } from 'ethers'
import { TailSpin } from  'react-loader-spinner'

function GetReward() {
  
  const { reward, stakingCall } = useContext(DappContext);

  const stakingAddress = '0x6D278724fC4d2580f9f68f074304d52B5e33aCB3'

  async function handleClick(){

    const _provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer_ = _provider.getSigner();
  
    const stakingContract = new ethers.Contract(stakingAddress, StakingJ.abi, signer_)

    await stakingContract.getReward();

    stakingCall()
  
  } 

  return (
    <>
    <p className={styles.title} >Your Reward:</p>
    <div className={styles.number} > { reward ? reward + ' RWD' : ( <div className={styles.btnContainer}  ><TailSpin color="#6495ED" height={60} width={60} /></div> ) } </div>
    <div></div>
    <div><button className={styles.btnReward} onClick={handleClick} >WITHDRAW</button></div>
    </>
  )
}

export default GetReward