import {React, createContext, useState} from 'react'
import axios from 'axios'
import Code from '../abi/PhotoArt.json'
import { ethers } from 'ethers'

export const DappContext = createContext();

export const DappProvider = ( { children } ) => {

const [isConnected, setIsConnected] = useState(false)

const [account, setAccount] = useState('0x0');

const [signer, setSigner] = useState({});

const [number, setNumber] = useState(1);

const [provider, setProvider] = useState({});

// this for async func, for NFT Gallery
var photoArtContract;

var baseURI = 'https://gateway.pinata.cloud/ipfs/';

const ContractAddress = "0xD0E2124F296e3967532D5340e91474733C6dBE2a";

const [imageURI0, setImageURI0] = useState('')
const [imageURI1, setImageURI1] = useState('')
const [imageURI2, setImageURI2] = useState('')

const imageURI = [imageURI0, imageURI1, imageURI2];
const setImageURI = [setImageURI0, setImageURI1, setImageURI2];

async function callGallery(id){

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  photoArtContract = new ethers.Contract(ContractAddress, Code.abi, provider)

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


  return (
    <DappContext.Provider value={ {isConnected, setIsConnected, account, setAccount, number, setNumber, signer, setSigner, provider, setProvider, callGallery, imageURI } } > { children } </DappContext.Provider>
  )
}