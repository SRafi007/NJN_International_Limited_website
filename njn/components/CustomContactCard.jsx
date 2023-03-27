import React, { useState,useRef } from 'react';
import styles from '../styles/Map.module.css'
import Image from 'next/image'
//import Image1 from '/../public/res/banner1.jpeg'
import img1 from '../public/res/banner1.jpg'
import img2 from '../public/res/banner3.jpg'
import img3 from '../public/res/banner4.jpg'


const locations = [
  {
    name: 'Location 1',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    phone: '(555) 555-5555',
    email: 'location1@example.com',
    mapLocation:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5827260066085!2d90.4064056!3d23.797869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71ce580cc5b%3A0x628f58a3f261f98f!2sUnico%20IT%20Limited!5e0!3m2!1sen!2sbd!4v1679938756196!5m2!1sen!2sbd",
    targetImage:img1
  },
  {
    name: 'Location 2',
    address: '456 Second Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    phone: '(555) 555-5555',
    email: 'location2@example.com',
    mapLocation:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5827260066085!2d90.4064056!3d23.797869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71ce580cc5b%3A0x628f58a3f261f98f!2sUnico%20IT%20Limited!5e0!3m2!1sen!2sbd!4v1679938756196!5m2!1sen!2sbd",
    targetImage:img2
  },
  {
    name: 'Location 3',
    address: '789 Third Street',
    city: 'Chicago',
    state: 'IL',
    zip: '60607',
    phone: '(555) 555-5555',
    email: 'location3@example.com',
    mapLocation:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5827260066085!2d90.4064056!3d23.797869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71ce580cc5b%3A0x628f58a3f261f98f!2sUnico%20IT%20Limited!5e0!3m2!1sen!2sbd!4v1679938756196!5m2!1sen!2sbd",  
    targetImage:img3
  }
];

function Location({ name, address, city, state, zip, phone, email,mapLocation, handleClick  }) {
  return (
    <div className={styles.location} onClick={handleClick}>
      <iframe src={mapLocation}
       width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{city}, {state} {zip}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

function CustomContactCard() {
  const myRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  

  function handleClick(location) {

    //setSelectedLocation.targetImage=img1;
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
      console.log(myRef.current)
    }
        setSelectedLocation(location);
  }

  return (
    <>
    <div className={styles.locationlist}>
      {locations.map(location => (
        <Location
          key={location.name}
          name={location.name}
          address={location.address}
          city={location.city}
          state={location.state}
          zip={location.zip}
          phone={location.phone}
          email={location.email}
          mapLocation={location.mapLocation}
          targetImage={location.targetImage}
          
          handleClick={() => handleClick(location)}
        />
      ))}
      
    </div>
    {selectedLocation && (
      
    <div ref={myRef} className={styles.TargetLocation}>
    <Image src={selectedLocation.targetImage} alt="1"
  
            layout='fill'

            >
    
  </Image>
  <h3>Hello</h3>

  </div>

    )}
    </>

    
  );
}



export default CustomContactCard;
