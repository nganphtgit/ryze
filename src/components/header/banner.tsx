import styles from '@styles/components/Header.module.scss';
import { Container } from '@mui/material';

export default function Banner() {
  return (
    <section className={styles.bannerSection}>
      <Container maxWidth='xl'>
        <h1>Hello</h1>
      </Container>
    </section>
  );
};