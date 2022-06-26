import { ReactNode } from 'react';
import Sidebar from 'components/sidebar';
import styles from '@styles/components/layouts/Main.module.scss';

type Props = {
  children?: ReactNode,
};

export default function MainLayout({children}: Props) {
  return (
    <div className={styles.layoutWrapper}>
      <Sidebar/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
