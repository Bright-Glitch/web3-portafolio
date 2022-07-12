import {React, useContext} from 'react'
import { DappContext } from '../context/DappContext'
import styles from '../styles/Connect.module.css'
import { ethers } from 'ethers'
import FutureJ from '../abi/Future.json'

function Connect() {

  const { setIsConnected, setAccount, setSigner, setProvider, setIsAuthorized, setIsReady } = useContext(DappContext);

  const FutureAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264'

  const stakingAddress = '0x6D278724fC4d2580f9f68f074304d52B5e33aCB3'

  async function handleClick(){

    if(window.ethereum){
        
      const newProvider = new ethers.providers.Web3Provider(window.ethereum)
        
      await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }],
      });
        
      await newProvider.send("eth_requestAccounts", []);
        
      const signer_ = newProvider.getSigner();
        
      const address = await signer_.getAddress();
        
      setAccount(address);
        
      setSigner(signer_);
        
      setProvider(newProvider);

      setIsConnected(true);

     //For Staking
      
      const userAddress = signer_.getAddress();
        
      const futureContract =  new ethers.Contract(FutureAddress, FutureJ.abi, newProvider)
    
      const _allowance = await futureContract.allowance(userAddress,stakingAddress)
    
      const allowanceNumber = _allowance.div(1e9).div(1e9).toNumber()
  
    if(0 < allowanceNumber ){
      
      setIsAuthorized(true)

      setIsReady(true)

    } else {
      setIsReady(true)
    }

  } else {
    setIsConnected(false);
  }

} 

 return (<div className={styles.btnContainer} >
    <button className={styles.btn1} onClick={handleClick} >CONNECT</button>
    </div>
  )
}

export default Connect