import React from 'react'
import Image from 'next/image'
import html from '../public/html.png'
import css from '../public/css.png'
import ethers from '../public/ethers.png'
import js from '../public/javascript.png'
import hh from '../public/hardhat.png'
import sol from '../public/solidity.png'
import nextjs from '../public/nextjs.png'
import reactjs from '../public/reactjs.png'
import styles from '../styles/Skills.module.css'

const icons = [ html, css, ethers, js, hh, sol, nextjs, reactjs ];
const nombres = ["HTML", "CSS", "Ethers.js", "JavaScript", "Hardhat", "Solidity", "Nexts.js", "React.js"];

function Skillcards() {
  return (
    <div className={styles.container} >
        {
            icons.map( (item, index)=> 
            <div key={index} className={styles.cards} >
                <Image src={item} alt="icon" width={40} height={40} quality={100} />
                <p className={styles.description} > { nombres[index] } </p>
            </div> )
        }
    </div>
  )
}

export default Skillcards