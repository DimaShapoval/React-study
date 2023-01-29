import React from "react";
import styles from "./style.module.css"

const Header = () =>{
    return(
          <div className={styles.headerWrapper}>
            <div className={styles.secondHeaderWrapper}>
                <img className={styles.headerImage} src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"/>

            </div>
          </div>
       
    )
  }

  export default Header;