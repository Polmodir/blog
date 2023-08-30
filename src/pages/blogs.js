import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import End from '@/components/End'
import Header from '@/components/Header'

var data = 
[
  {
    "img": "https://cdn.britannica.com/01/150101-050-810CE9A9/soldiers-German-part-Soviet-Union-Operation-Barbarossa-1941.jpg",
    "title": "Operation Barbarossa",
    "description": "Operation Barbarossa was the invasion of the Soviet Union by Nazi Germany and many of its Axis allies, starting on Sunday, 22 June 1941, during the Second World War.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://media.iwm.org.uk/ciim5/39/368/large_000000.jpg",
    "title": "Luftwaffe",
    "description": "The Luftwaffe was the aerial-warfare branch of the German Wehrmacht before and during World War II.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://i0.wp.com/www.historyworkshop.org.uk/wp-content/uploads/2018/06/featimage-1.jpg?fit=1280%2C800&ssl=1",
    "title": "1936 Summer Olympics",
    "description": "The 1936 Summer Olympics, commonly known as Berlin 1936, were an international multi-sport event held from 1 to 16 August 1936 in Berlin, Germany.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/223710/header.jpg?t=1643567513",
    "title": "Cry of Fear",
    "description": "Cry of Fear is a survival horror game developed by independent Swedish studio Team Psykskallar.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://gamerempire.net/wp-content/uploads/2023/07/Hearts-of-Iron-4-%E2%80%93-What-is-the-End-Date-of-the-Game.jpg",
    "title": "Hearts of Iron IV",
    "description": "Hearts of Iron IV, also known as HOI4, is a grand strategy computer wargame developed by Paradox Development Studio and published by Paradox Interactive.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://image.api.playstation.com/cdn/UP2103/CUSA00792_00/DxIB6twEsVkYanltsoOLP3ZVfBrHbhub.png",
    "title": "The Binding of Isaac",
    "description": "The Binding of Isaac is a roguelike video game designed by independent developers Edmund McMillen and Florian Himsl.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0MD5IttvwqE-wV7lW_6YGanabbrDplqZ0A&usqp=CAU",
    "title": "Nihonkoku Shoukan",
    "description": "In the Great Orient, lies the continent called Rodenius. Far to the eastern sea, a group of islands suddenly appeared. The country of the islands called itself: Japan. According to them, their nation had been transported to another world.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://www.latestanimenews.com/wp-content/uploads/2023/04/Homunculus-Nakoshi.png",
    "title": "Homunculus",
    "description": "Homunculus is a Japanese manga series written and illustrated by Hideo Yamamoto.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  },
  {
    "img": "https://e0.pxfuel.com/wallpapers/854/213/desktop-wallpaper-view-1423375890305-oyasumi-punpun-ending.jpg",
    "title": "Oyasumi Punpun",
    "description": "Goodnight Punpun is a Japanese manga series written and illustrated by Inio Asano.",
    "bottom": [
      "../assets/icon/Userprofile.svg",
      "Polmodir",
      "2nd January,2022"
    ]
  }
]

export default function Home() {
  return (
    <>
    <div className={styles.contain}>
        <Header Header='black'/>
        <div className={styles.name}>
        <p className={styles.blogPosts}>Blog posts</p>
        <p className={styles.topDesc}>Our latest updates and blogs about managing your team</p>
        </div>
        <div className={styles.bottom} id="bottom">
          {/* <div className={styles.card}>
            <img className={styles.image} src='https://image.shutterstock.com/image-photo/snowboarding-outdoors-concept-injured-man-600w-1624086454.jpg'></img>
            <p className={styles.title}>10 secret tips for managing a team remotely</p>
            <p className={styles.description}>Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team</p>
            <img className={styles.icon} src='chud.png'></img>
            <p className={styles.username}>Bessie Cooper</p>
            <svg className={styles.littlething} xmlns="http://www.w3.org/2000/svg" width="3" height="10" viewBox="0 0 3 10" fill="none">
            <path d="M0.936414 10V0.129999H2.39241V10H0.936414Z" fill="#BBC8D4"/>
            </svg>
            <p className={styles.date}>2nd January,2022</p>
          </div> */}
          {data.map((boom) => {
            return (<Card boom={boom}/>)})}
        </div>
        <p className={styles.next}>
            Next &gt;;DONT WORK
        </p>
        <End/>
    </div>
    </>
  )
}

