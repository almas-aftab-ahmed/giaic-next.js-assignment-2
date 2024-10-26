import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2>Wellcome to the Hero Section</h2>
      < p className = {styles.para}> My name is almas aftab ahmed siddiqui . I am in intermidiate.<br></br>
        I have recently started my journey of information and tenchnology and i am about to start my journey as frontend developer.
      </p>
    </section>
  );
};
export default Hero;