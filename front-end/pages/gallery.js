import Head from 'next/head'
import {React, useEffect, useState } from 'react'
import Bgimg from '../components/BG-image/Bgimg'
import Image from 'next/image'
import styles from '../styles/gallery.module.css'
import ContractGallery from '../components/ContractGallery'
import { TailSpin } from  'react-loader-spinner'
import axios from 'axios'

function Gallery() {
  
  const [imageURI0, setImageURI0] = useState('')
  const [imageURI1, setImageURI1] = useState('')
  const [imageURI2, setImageURI2] = useState('')

  const [isLoaded, setIsLoaded] = useState([])
  
  const imageURI = [imageURI0, imageURI1, imageURI2];
  const setImageURI = [setImageURI0, setImageURI1, setImageURI2];

  useEffect(()=>{

  // NFT Gallery:  

  // replace with your Alchemy api key
  const apiKey = "14VJytZXT_MxGTgNxW_Q8Z3H_vMootK4";
  const baseURL = `https://eth-goerli.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection`;
  var baseURI = 'https://gateway.pinata.cloud/ipfs/'
  const contractAddr = "0xD0E2124F296e3967532D5340e91474733C6dBE2a";
  const withMetadata = "true";
  var media;
  
  var config = {
    method: 'get',
    url: `${baseURL}?contractAddress=${contractAddr}&withMetadata=${withMetadata}`,
    headers: { }
  };
  
  const callGallery = async () => {

    await Promise.all( 
      
      imageURI.map( async (item, index)=>{
  
        axios(config)
        .then((response) =>  {

          const { nfts } = response.data

          media = nfts[index].media[0].raw

          setImageURI[index](media.replace("ipfs://","")) 
        })
        .catch((error) => {
          console.log(error)
          location.reload()
        });

      } )

    )  
    

  }
  
    callGallery()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const myLoader = ({ src, width, quality }) => {
    return `https://gateway.pinata.cloud/ipfs/${src}?w=${width}&q=${quality || 75}`
  }

  const imageMapping = (
    imageURI.map( (item, index)=>
    <div key={index} className={styles.imagesContainer} >
    <div className={styles.images} >
        { imageURI[index] ? <Image className={styles.image} alt="NFT Image" src={item} loader={myLoader} layout='fill' quality={100}  /> : ( <TailSpin color="#6495ED" height={110} width={110} /> ) }
    </div>

    </div>
  ))

  return (
    <>
    <Head>
      <title>Web3 | NFT&apos;s</title>
    </Head>

    <div className={styles.container} >
      { imageMapping }
    </div>

    <ContractGallery/>

    <Bgimg/>
    </>
  )
}

export default Gallery



