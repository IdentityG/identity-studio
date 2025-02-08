import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/it.png" />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: 'Identity Creative Studio',
  keywords: 'next.js, react, web, ui, Portfolio, Identity, studio, Egnuma Gelana',
  keywords: 'Simple and multi-page next.js and react application',
};

export default PagesMetaHead;
