import styles from '@styles/components/Header.module.scss';

type Props = {
  pageId?: string,
};

const navigations = [{
    pageId: 'about',
    link: '/',
    title: 'About',
  }, {
    pageId: 'posts',
    link: '/posts',
    title: 'Posts',
  }, {
    pageId: 'projects',
    link: '/projects',
    title: 'Projects',
  }, {
    pageId: 'accomplishments',
    link: '/accomplishments',
    title: 'Accomplishments',
  }, {
    pageId: 'contact',
    link: '/contact',
    title: 'Contact',
  },
];

export default function Navigation({pageId}: Props) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navigations.map((item) => (
          <li key={item.pageId} className={item.pageId === pageId ? styles.active : ''}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}