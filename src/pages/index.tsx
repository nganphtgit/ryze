import Head from 'next/head';
import type { NextPage } from 'next';
import ContentLayout from 'components/layouts/content';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Software Engineer</title>
        <meta name='description' content='As a software engineer, I do everything about software.'/>
      </Head>
      <ContentLayout pageId={'about'}>
        <h1>Hello</h1>
      </ContentLayout>
    </>
  );
}

export default Home
