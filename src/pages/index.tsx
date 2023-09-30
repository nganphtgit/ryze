import Head from 'next/head';
import type { NextPage } from 'next';
import ContentLayout from 'components/layouts/content';
import styles from '@styles/pages/Index.module.scss';
import EChartsReactCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { CustomChart, CustomSeriesOption } from 'echarts/charts';

const Introduction = (): JSX.Element => {
  return (
    <div className={styles.intro}>
      <h1>Hello</h1>
      <p>I am a Software Engineer</p>
      <p>Love solving <i>logical</i> stuffs</p>
      <p>Learning forever</p>
      <p>Still love South Korea very much</p>
      <p>A big fan of Faker, and a Liverpool "half-season" fan</p>
      <p>Love beautiful things</p>
      <p>I do not really have any idea for this site, but I think it is great to have a space for dancing freely</p>
    </div>
  );
};

const Interests = (): JSX.Element => {
  return (
    <div className={styles.interests}>
      <h2>Interests</h2>
      <p>Lately, I often entertain myself by walking around Saigon - Cholon and taking photos every weekend</p>
      <p>Follow me at <a href="https://www.instagram.com/phameiluj/">https://www.instagram.com/phameiluj/</a></p>
      <p>Also passionate about sports, both watching and playing</p>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Software Engineer</title>
        <meta name='description' content='As a software engineer, I do everything about software.' />
      </Head>
      <ContentLayout pageId={'about'}>
        <Introduction/>
        <Interests/>
      </ContentLayout>
    </>
  );
}

export default Home
