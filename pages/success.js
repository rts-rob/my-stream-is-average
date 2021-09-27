import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function CustomSuccess() {
  return (
    <Layout>
      <Header title="Stream submitted!" />
      <br />
      <section>
        Thanks for your submission! Once propagated you'll see your stream on
        the home page.{' '}
      </section>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  );
}