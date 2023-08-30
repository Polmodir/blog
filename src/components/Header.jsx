import styles from '@/styles/Home.module.css'
export default function Header(x){
    return (<><a href='/' className={'team'+x.Header}>Polmodir</a>
    <div className={'topright'}>
      <a href='/blogs' className={'links'+x.Header}>Blog Posts</a>
      <p className={'links'+x.Header}>DONT WORK</p>
      <p className={'links'+x.Header}>DONT WORK</p>
      <p className={'links'+x.Header}>DONT WORK</p>
      <p className={'getAccess'+x.Header}>DONT WORK</p>
    </div></>)
}