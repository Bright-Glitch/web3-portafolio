import {React, useContext, useState } from 'react'
import { DappContext } from '../../context/DappContext'
import styles from '../../styles/stake.module.css'
import StakingJ from '../../abi/StakingFT.json'
import { ethers } from 'ethers'
import { TailSpin } from  'react-loader-spinner'

function Staking() {

  const { totalSupply, FTbalance, stakingCall } = useContext(DappContext);

  const stakingAddress = '0x6D278724fC4d2580f9f68f074304d52B5e33aCB3'

  const [amount, setAmount] = useState('')
  const [validAmount, setValidAmount] = useState(true)

  async function handleClick(){

    if(  amount && FTbalance >= amount > 0 ){

      setValidAmount(true)

      const _provider = new ethers.providers.Web3Provider(window.ethereum)

      const signer_ = _provider.getSigner();
    
      const stakingContract = new ethers.Contract(stakingAddress, StakingJ.abi, signer_)

      const AmountBN = ethers.utils.parseEther(`${amount}`)

      const response = await stakingContract.stake(AmountBN);

      stakingCall()

      _provider.once(response.hash, (transaction) => {
        console.log("Hash emited", transaction)
        stakingCall()
      })

      setAmount('')

    } else {
      setValidAmount(false)
    }

    
    
  } 

  function handleKeyPress(e) {
    var key = e.key;
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        e.preventDefault();
    }
    else {
        console.log( "You pressed a key: " + key );
    }
  }

  return (
    <>
    <p className={styles.title} >Total FT Supply:</p>
    <div className={styles.number} > { totalSupply ? totalSupply + ' FT' : ( <div className={styles.btnContainer}  ><TailSpin color="#6495ED" height={60} width={60} /></div>) } </div>
    <div>
      <span className={ validAmount ? styles.errorMsgNone : styles.errorMsg} >Invalid Amount</span>
      <input onKeyPress={(e) => handleKeyPress(e)} placeholder="-Amount-" className={styles.amount} onChange={(e)=>setAmount(e.target.value)} value={amount} name="staking" type="number"></input>
    </div>
    <div><button className={styles.btnStake} onClick={handleClick} >STAKE</button></div>
    </>
  )
}

export default Staking