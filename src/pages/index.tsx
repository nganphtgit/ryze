import Head from 'next/head';
import type { NextPage } from 'next';
import ContentLayout from 'components/layouts/content';
import styles from '@styles/pages/Index.module.scss';
import EChartsReactCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { RadarComponent, TooltipComponent, GridComponent } from 'echarts/components';
import {
  CanvasRenderer,
} from 'echarts/renderers';

echarts.use(
  [RadarChart, RadarComponent, TooltipComponent, GridComponent, CanvasRenderer]
);

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <h1>Hello</h1>
      <p>I am a Software Engineer</p>
      <p>I like learning, especially computer, spending time coding, reading books, revising, and refactoring</p>
      <p>The most of my working time, I work in a Full-stack Developer position</p>
      <p>I like to build fancy, effective UI. I like to work with data too, such as computational, visualization</p>
      <p>More challenging, more effort, the working challenge inspire me</p>
      <p>I hope to learn a Master&apos;s degree or work in Korea, and I wish to live in Korea for a time</p>
      <p>My communication is not good, but I always try to improve</p>
    </div>
  );
};

const MySkill = () => {
  const option = {
    radar: {
      indicator: [
        { name: 'Programming', max: 100, min: 0 },
        { name: 'Git', max: 100, min: 0 },
        { name: 'Front-end', max: 100, min: 0 },
        { name: 'Back-end', max: 100, min: 0 },
        { name: 'Database', max: 100, min: 0 },
        { name: 'Cloud services', max: 100, min: 0 },
        { name: 'Bash', max: 100, min: 0 },
        { name: 'Data Structure and Algorithm', max: 100, min: 0 },
      ],
      radius: '70%',
      axisName: {
        color: '#fff',
        fontFamily: 'Roboto mono',
      },
      
    },
    series: [
      {
        name: 'Skill',
        type: 'radar',
        symbol: 'triangle',
        label: {
          show: true,
          color: '#fff',
          fontFamily: 'Roboto mono',
        },
        emphasis: {
          areaStyle: {
            color: 'rgba(32, 32, 96, 0.9)',
          },
        },
        data: [
          {
            value: [80, 75, 85, 70, 80, 75, 65, 70],
            name: 'My skills',
            areaStyle: {
              color: 'rgba(32, 32, 96, 0.7)',
            },
          },
        ],
      }
    ]
  }
  return (
    <div className={styles.skills}>
      <h1>My Skills</h1>
      <EChartsReactCore
        echarts={echarts}
        option={option}
        style={{ width: '85%', height: '85%' }}
      />
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
        <MySkill/>
      </ContentLayout>
    </>
  );
}

export default Home
