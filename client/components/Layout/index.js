import Head from "next/head";
import TopBar from "../Bar";

export default ({ children, title = "ACME Reservation" }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <TopBar />
    </header>

    {children}

    <footer>&copy; ACME Reservation Inc. 2018. All rights Reserved</footer>
  </>
);
