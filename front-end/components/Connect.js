import {React, useContext} from 'react'
import { DappContext } from '../context/DappContext'
import styles from '../styles/Connect.module.css'
import { ethers } from 'ethers'

function Connect() {

  const { setIsConnected, setAccount, setSigner, setProvider} = useContext(DappContext);

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
    } else {
        setIsConnected(false);
    }

} 

 return (
    <div><button className={styles.btn1} onClick={handleClick} >CONNECT</button></div>
  )
}

export default Connect