import { ReactNode } from 'react';
import Navigation from 'components/header/navigation';
import styles from '@styles/components/layouts/Main.module.scss';

type Props = {
  children: ReactNode,
  pageId: string,
};

export default function ContentLayout({children, pageId}: Props) {
  return (
    <>
      <Navigation pageId={pageId} />
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
};
