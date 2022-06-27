import React, {useState, useEffect} from "react";
import styles from "./styles.module.scss";

const InfoPopUp: React.FC<{ data: any }> = ({ data }) => {
    const [show, setShow] = useState(false)

useEffect(() => {
    if(data && data.ip){
        setShow(true)
    }else {
        setShow(false)
    }
}, [data])

  return (
   <div className={styles.container}>
      { show &&
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h2>IP ADDRESS</h2>
          <div className={styles.data}>{data.ip}</div>
        </div>

        <div className={styles.info}>
          <h2>LOCATION</h2>
          <div className={styles.data}>
            {data.location.city},
            {data.location.country},
            {data.location.postalCode}
          </div>
        </div>

        <div className={styles.info}>
          <h2>TIMEZONE</h2>
          <div className={styles.data}>{data.location.timezone}</div>
        </div>

        <div className={styles.info}>
          <h2>ISP</h2>
          <div className={styles.data}>{data.isp}</div>
        </div>
      </div>}
    </div>
 
  );
};

export default InfoPopUp;
