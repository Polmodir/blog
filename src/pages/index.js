import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import End from '@/components/End'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
    <div className={styles.containmain}>
        <img className={styles.mainbackground} src='background.png'></img>
        <Header Header='white'/>
        <p className={styles.mainname}>Instantly see what I like</p>
        <p className={styles.maindesc}>I am literally Chudjak frfrfr</p>
        <input className={styles.emailmain} type='text' placeholder='Email'/>
        <button className={styles.buttonmain}>Get early access DONT WORK</button>
        <img className={styles.mainimage1} width='607px' src='hoi4.png'></img>
    </div>
    </>
  )
}

