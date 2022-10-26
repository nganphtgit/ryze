import Head from 'next/head';
import ContentLayout from 'components/layouts/content';
import { NextPage } from 'next';

interface Quote {
  content: string;
  author: string;
}

const quotes: Quote[] = [{
  content: 'You should never stop dreaming because dreaming is the beginning of everything',
  author: 'Le Duy Loan'
}];

const Content = (): JSX.Element => {
  return (
    <>
      {quotes.map((quote: Quote, i: number) => (
        <p key={`${i}`}>&ldquo;{quote.content}&rdquo; - <i>{quote.author}</i></p>
      ))}
    </>
  );
};

const Quotes: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Software Engineer</title>
        <meta name='description' content='As a software engineer, I do everything about software.' />
      </Head>
      <ContentLayout pageId={'quotes'}>
        <Content />
      </ContentLayout>
    </>
  );
}

export default Quotes;