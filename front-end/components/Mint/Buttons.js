import {React, useEffect, useContext } from 'react'
import { DappContext } from '../../context/DappContext'
import styles from '../../styles/mint.module.css'
import Code from '../../abi/Future.json'
import { ethers } from "ethers"

function Buttons() {

  var futureContract;

  const ContractAddress = "0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264";

  const { account, setAccount, signer, provider} = useContext(DappContext);

useEffect(()=>{
  futureContract = new ethers.Contract(ContractAddress, Code.abi, signer)

  async function accountWasChanged(accounts){ 
  
  const signer_ = provider.getSigner();
  setAccount(accounts);

  futureContract = new ethers.Contract(ContractAddress, Code.abi, signer_)
   }
  
  window.ethereum.on('accountsChanged', accountWasChanged);
  // window.ethereum.on('chainChanged', (_chainId) => window.location.reload()); 

},[]);

const { number } = useContext(DappContext);

const BigNumber = ethers.utils.parseEther(`${number}.0`);

async function handleMint(){
  const response = await futureContract.mint(account, BigNumber);
  console.log(response)
}

async function handleBurn(){
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