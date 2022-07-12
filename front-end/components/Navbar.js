import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {

const [click, setClick] = useState(true)

const handleClick = () => setClick(!click);
  
  return (
    <div className={ click ? "nav-container" : "nav-container nav-container-active" }>

      <a href='https://github.com/Bright-Glitch/web3-portafolio' target="_blank" rel="noreferrer" ><Image src="/web3-icon-7.png" width={50} height={50} alt="web3" className="nav-logo" /></a>

      <ul className={ click ? "nav-list" : "nav-list-active" }>
        <li><Link href="/"><a onClick={handleClick} >Home</a></Link></li>
        <li><Link href="/token"><a onClick={handleClick} >Token</a></Link></li>
        <li><Link href="/stake"><a onClick={handleClick} >Stake</a></Link></li>
        <li><Link href="/gallery"><a onClick={handleClick} >NFT Gallery</a></Link></li>
        <li><Link href="/contact"><a onClick={handleClick} >Contact Me</a></Link></li>
      </ul>

      <button className={ click ? "menu" : "menu opened" } onClick={handleClick} >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path className='line line1' d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className='line line2' d="M 20,50 H 80" />
          <path className='line line3' d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
      
    </div>
  )
}

export default Navbar