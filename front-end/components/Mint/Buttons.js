import {React, useEffect, useContext } from 'react'
import { DappContext } from '../../context/DappContext'
import styles from '../../styles/mint.module.css'
import FutureJ from '../../abi/Future.json'
import { ethers } from 'ethers'

function Buttons() {

  const ContractAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264';

  const { account } = useContext(DappContext);

  async function accountWasChanged(){ 
  
    window.location.reload()
    
  }

useEffect(()=>{
  
  window.ethereum.on('accountsChanged', accountWasChanged);
  
  // window.ethereum.on('chainChanged', (_chainId) => window.location.reload()); 

},[]);

const { number } = useContext(DappContext);

const BigNumber = ethers.utils.parseEther(`${number}.0`);

async function handleMint(){
  const _provider = new ethers.providers.Web3Provider(window.ethereum)

  const signer_ = _provider.getSigner();

  const futureContract = new ethers.Contract(ContractAddress, FutureJ.abi, signer_)

  const response = await futureContract.mint(account, BigNumber);

  console.log(response)
}

async function handleBurn(){
  const _provider = new ethers.providers.Web3Provider(window.ethereum)

  const signer_ = _provider.getSigner();

  const futureContract = new ethers.Contract(ContractAddress, FutureJ.abi, signer_)

  const response = await futureContract.burn(BigNumber);

  console.log(response)
}

  return (
    <><button className={styles.btn1} onClick={handleMint} >MINT</button>
    <button className={styles.btn2} onClick={handleBurn} >BURN</button>
    </>
  )
}

export default Buttons