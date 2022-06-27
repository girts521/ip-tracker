import React from "react";
import styles from "./styles.module.scss";

const Header: React.FC<{passText: (text: string) => void}> = ({passText}) => {
  const getInput = (e: React.FormEvent) => {
    e.preventDefault();
    const target: any = e.target
    const text = target[0].value
    passText(text)
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.heading}>IP Adress tracker</h1>
      <form onSubmit={getInput} className={styles.inputWrapper}>
        <input  className={styles.input} type="text" />
        <button className={styles.btn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Header;
