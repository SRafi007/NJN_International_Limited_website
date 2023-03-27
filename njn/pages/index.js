import Image from 'next/image'
import styles from '../styles/HomeStyle2.module.css';
import SlideComponent from '../components/CustomSlider'
import CustomNavbar from '../components/NavbarCustom'
import Footer from '../components/CustomFooter'
export default function Home() {
  return (
    <>

      <div className={styles.body}>
        <CustomNavbar/>
        <SlideComponent/>
      <Footer/>
      </div>
      
    </>
  )
}
