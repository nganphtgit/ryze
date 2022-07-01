import fs from 'fs';
import path from 'path';

const Banner = () => {
  return (
    <section>
      <div className='container'>
        <h1>Hellooooooo</h1>
      </div>
    </section>
  );
};

export function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), 'public', 'posts'));

  return {
    props: {},
  }
}

export default function Blog() {
  return (
    <Banner />
  );
};