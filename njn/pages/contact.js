import Image from 'next/image'
import styles from '../styles/HomeStyle2.module.css';
import CustomNavbar from '../components/NavbarCustom'
import Footer from '../components/CustomFooter'
import ContactCard from '../components/CustomContactCard'
export default function Contact() {
  return (
    <>

      <div className={styles.body}>
        <CustomNavbar/>
        <ContactCard/>
      b <Footer/>
      </div>
      
    </>
  )
}
