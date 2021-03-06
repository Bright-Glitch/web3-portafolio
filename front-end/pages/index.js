import Head from 'next/head'
import Code from '../components/Code'
import Skillcards from '../components/Skillcards'
import styles from '../styles/Home.module.css'
import Bgimg from '../components/BG-image/Bgimg'

export default function Home() {
    
  return (
    <><div className={styles.container}>
        <Head>
          <title>Web3 | Home</title>
        </Head>

        <h1 className={styles.h1} >Blockchain Developer</h1>

        <p className={styles.p} >I&apos;m Brian Galdo, a front end and blockchain developer. <br/> I have experience working with React.js, Next.js, Solidity, Hardhat and ethers.js.
        <br/> I&apos;m a polimath, I love learning and working to improve my skills and value in the market.<br/> I like profesionalism and I&apos;m always looking forward to create and deliver great products.</p>

        <Skillcards/>

        <Code/>

      </div>
    
    <Bgimg/>
    </>
  )
}
