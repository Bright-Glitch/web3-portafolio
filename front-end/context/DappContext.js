import {React, createContext, useState} from 'react'
import axios from 'axios'
import PhotoJ from '../abi/PhotoArt.json'
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

// NFT Gallery:

var baseURI = 'https://gateway.pinata.cloud/ipfs/';

const PhotoArtAddress = "0xD0E2124F296e3967532D5340e91474733C6dBE2a"

const [imageURI0, setImageURI0] = useState('')
const [imageURI1, setImageURI1] = useState('')
const [imageURI2, setImageURI2] = useState('')

const imageURI = [imageURI0, imageURI1, imageURI2];
const setImageURI = [setImageURI0, setImageURI1, setImageURI2];

async function callGallery(id){

  const _provider = new ethers.providers.Web3Provider(window.ethereum)

  const photoArtContract = new ethers.Contract(PhotoArtAddress, PhotoJ.abi, _provider)

  const metaData = await photoArtContract.tokenURI(id);

  const metaDataURI =  metaData.replace("ipfs://",baseURI);

  axios.get(metaDataURI)
  .then(function (response) {

    setImageURI[id](response.data.image.replace("ipfs://",baseURI));

  })
  .catch(function (error) {

    setTimeout(function(){

      window.location.reload();

    },100); 
    
    console.log(error);

  })
  
}

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
    <DappContext.Provider value={ {authCall, FTbalance, futureCall, stakingCall, staked, reward, totalSupply, isReady, setIsReady ,isAuthorized, setIsAuthorized, isConnected, setIsConnected, account, setAccount, number, setNumber, signer, setSigner, provider, setProvider, callGallery, imageURI } } > { children } </DappContext.Provider>
  )
}