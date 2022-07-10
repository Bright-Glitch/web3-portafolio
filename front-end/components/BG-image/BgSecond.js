import React from 'react'
import bgimg from '../../public/bg-3.jpg'
import Image from 'next/image'
import styles from '../../styles/BgSecond.module.css'

function BgSecond() {
  return (
    <>
    <div className={styles.container}>
    <Image src={bgimg} layout="fill"
        objectFit="cover"
        quality={100}  />
    </div>
    </>
  )
}

export default BgSecond