import {React, createContext, useState} from 'react'
import { ethers } from 'ethers'
import StakingJ from '../abi/StakingFT.json'
import FutureJ from '../abi/Future.json'

export const DappContext = createContext();

export const DappProvider = ( { children } ) => {

const [isConnected, setIsConnected] = useState(false)

const [account, setAccount] = useState('0x0');

const [signer, setSigner] = useState({});

const [number, setNumber] = useState(1);

const [provider, setProvider] = useState({});



// For Authorization for Staking:

const [isAuthorized, setIsAuthorized] = useState(false)

// to wait to check is it's authorized and avoid shoing up the Auth button:
const [isReady, setIsReady] = useState(false) 

//Staking Call:

const stakingAddress = '0x6D278724fC4d2580f9f68f074304d52B5e33aCB3'

const [staked, setStaked] = useState('');
const [reward, setReward] = useState('');
const [totalSupply, setTotalSupply] = useState('');
  
async function stakingCall(){

  const _provider = new ethers.providers.Web3Provider(window.ethereum)

  const signer_ = _provider.getSigner();

  const stakingContract = new ethers.Contract(stakingAddress, StakingJ.abi, signer_)

  const userAddress_ = signer_.getAddress()

  const rewardBN = await stakingContract.earned(userAddress_)
    
  const reward_ = rewardBN.div(1e9).div(1e9).toNumber()

  setReward(reward_.toString())

  const totalSupplyBN = await stakingContract._totalSupply()
    
  const totalSupply_ = totalSupplyBN.div(1e9).div(1e9).toNumber()

  setTotalSupply(totalSupply_.toString())

  const stakedBN = await stakingContract._balances(userAddress_)

  const staked_ = stakedBN.div(1e9).div(1e9).toNumber()

  setStaked(staked_.toString())

} 

//Staking Aouthorized? :

async function authCall(){
  
    const newProvider = new ethers.providers.Web3Provider(window.ethereum)

    const signer_ = newProvider.getSigner();
      
    const userAddress = signer_.getAddress();
        
    const futureContract =  new ethers.Contract(futureAddress, FutureJ.abi, newProvider)
       
    const _allowance = await futureContract.allowance(userAddress,stakingAddress)
       
    const allowanceNumber = _allowance.div(1e9).div(1e9).toNumber()
     
    if(0 < allowanceNumber ){
         
      setIsAuthorized(true)
   
      setIsReady(true)
   
    } else {
      setIsReady(true)
    } 
}



//Future Call

const [FTbalance, setFTBalance] = useState('');

const futureAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264'

async function futureCall(){

  const _provider = new ethers.providers.Web3Provider(window.ethereum)

  const signer_ = _provider.getSigner();

  const futureContract = new ethers.Contract(futureAddress, FutureJ.abi, signer_)

  const userAddress_ = signer_.getAddress()

  const FTbalanceBN = await futureContract.balanceOf(userAddress_)

  const FTbalance_ = FTbalanceBN.div(1e9).div(1e9).toNumber()

  setFTBalance(FTbalance_)

} 

  return (
    <DappContext.Provider value={ {authCall, FTbalance, futureCall, stakingCall, staked, reward, totalSupply, isReady, setIsReady ,isAuthorized, setIsAuthorized, isConnected, setIsConnected, account, setAccount, number, setNumber, signer, setSigner, provider, setProvider } } > { children } </DappContext.Provider>
  )
}