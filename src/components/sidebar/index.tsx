import styles from '@styles/components/Sidebar.module.scss';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Link from 'next/link';

type SocialItem = {
  link: string,
  icon: string,
};

type SocialIcons = {
  [any: string]: any,
};

const socials = [{
  link: 'https://github.com/nganphtgit',
  icon: 'github',
}, {
  link: 'https://www.linkedin.com/in/julie-ph%E1%BA%A1m-56b808165/',
  icon: 'linkedin',
}, {
  link: 'mailto:tuyetnganphamhoang@gmail.com',
  icon: 'email',
}];

const socialIcons: SocialIcons = {
  github: () => <GitHub/>,
  linkedin: () => <LinkedIn/>,
  email: () => <Email/>,
};

const Social = ({link, icon}: SocialItem) => {
  return (
    <div className={styles.socialItem}>
      <Link href={link}>
        <a target={'_blank'}>
          {socialIcons[icon]()}
        </a>
      </Link>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <img src='/img/profile/me.jpg' />
          </div>
          <h2>Julie Pham</h2>
          <small>A Software Engineer<br/>Do anything about software<br/>Code, read, and learn</small>
          <div className={styles.socials}>
            {socials.map((item, i) => (
              <Social key={i} link={item.link} icon={item.icon}/>
            ))}
          </div>
        </div>
        <footer>
          <p>&copy; <small>Eiluj Nah {new Date().getFullYear()}</small></p>
        </footer>
      </div>
    </aside>
  );
};