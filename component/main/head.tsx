/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

interface Prop {
  title: string;
}

export default function HeadComponent({ title }: Prop) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}
