import Head from 'next/head';

export default function MainContainer({ children }) {
  return (
    <>
      <Head>
        <title>Kristopher Ali | kristech.io</title>
        <meta
          name="description"
          content="Kristopher Ali is a software engineer who specializes in creating websites, games, and desktop + mobile apps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark">{children}</div>
    </>
  );
}

