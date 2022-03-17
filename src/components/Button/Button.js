import styles from './Button.module.scss';

const Button = props => {
  return (
    <div>
      <button className={styles.button} onClick={() => props.setStart(true)}>Start</button>
      <button className={styles.button} onClick={() => props.setStart(false)}>Stop</button>
      <button className={styles.button} onClick={() => props.setTime(0)}>Reset</button> 
    </div>
  );
};

export default Button;