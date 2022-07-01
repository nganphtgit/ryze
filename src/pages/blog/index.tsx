import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter';

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
    <>
      <Banner />
    </>
  );
};