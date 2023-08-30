import styles from '@/styles/Home.module.css'
export default function Card({boom}){
    return ( <div className={styles.card}>
        <img className={styles.image} src={boom.img}></img>
        <p className={styles.title}>{boom.title}</p>
        <p className={styles.description}>{boom.description}</p>
        <img className={styles.icon} src='chud.png'></img>
        <p className={styles.username}>{boom.bottom[1]}</p>
        <svg className={styles.littlething} xmlns="http://www.w3.org/2000/svg" width="3" height="10" viewBox="0 0 3 10" fill="none">
        <path d="M0.936414 10V0.129999H2.39241V10H0.936414Z" fill="#BBC8D4"/>
        </svg>
        <p className={styles.date}>{boom.bottom[2]}</p>
      </div>)
}