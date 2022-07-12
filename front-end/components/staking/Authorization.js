import {React, useContext, useEffect } from 'react'
import { DappContext } from '../../context/DappContext'
import styles from '../../styles/stake.module.css'
import { ethers } from 'ethers'
import FutureJ from '../../abi/Future.json'
import Withdraw from './Withdraw'
import { TailSpin } from  'react-loader-spinner'

function Authorization() {

  const { provider, isAuthorized, isReady, setIsAuthorized } = useContext(DappContext);

  const FutureAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264'

  const stakingAddress = '0x6D278724fC4d2580f9f68f074304d52B5e33aCB3'

  const ReadyGo = isAuthorized ? (<Withdraw/>) : (<div className={styles.btnContainer} ><button className={styles.btnAuth} onClick={handleClick} >AUTHORIZE</button></div>)
  
  async function accountWasChanged(){window.location.reload()}

  useEffect(() => {
    window.ethereum.on('accountsChanged', accountWasChanged);
  }, []) 
  
  async function handleClick(){

    const signer_ = provider.getSigner();
    
    const futureContract =  new ethers.Contract(FutureAddress, FutureJ.abi, signer_)

    const BigNumber = ethers.utils.parseEther("700000.0");

    await futureContract.approve(stakingAddress, BigNumber );
  
    setIsAuthorized(true);
  
  } 

 return (
    <>{ isReady ? ReadyGo : ( <div className={styles.btnContainer}  ><TailSpin color="#6495ED" height={60} width={60} /></div> ) }</>
  )
}

export default Authorization