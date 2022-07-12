import Head from 'next/head'
import {React, useEffect, useContext} from 'react'
import { DappContext } from '../context/DappContext'
import Bgimg from '../components/BG-image/Bgimg'
import Image from 'next/image'
import styles from '../styles/gallery.module.css'
import ContractGallery from '../components/ContractGallery'
import { TailSpin } from  'react-loader-spinner'

function Gallery() {

  const { callGallery, imageURI } = useContext(DappContext);

  useEffect(()=>{

    callGallery(0);

    callGallery(1);

    callGallery(2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const imageMapping = (
    imageURI.map( (item, index)=>
    <div key={index} className={styles.imagesContainer} >

    <div className={styles.images} >
        { imageURI[index] ? <Image className={styles.image} alt="NFT Image" src={item} layout='fill' quality={100}  /> : ( <TailSpin color="#6495ED" height={110} width={110} /> ) }
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