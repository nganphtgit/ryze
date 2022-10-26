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
    link: '#',
    title: 'Posts',
  }, {
    pageId: 'projects',
    link: '#',
    title: 'Projects',
  }, {
    pageId: 'accomplishments',
    link: '#',
    title: 'Accomplishments',
  }, {
    pageId: 'quotes',
    link: '/quotes',
    title: 'Quotes',
  },
];

export default function Navigation({pageId}: Props) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navigations.map((item) => (
          <li key={item.pageId} className={item.pageId === pageId ? styles.active : ''}>
            <a href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}