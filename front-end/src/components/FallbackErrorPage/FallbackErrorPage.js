import { Link, useRouteError } from "react-router-dom";

import Header from "../Header/Header";
import utilStyles from "../../App/utilStyles.module.css";

export default function FallbackErrorPage() {
  // https://reactrouter.com/en/main/route/error-element

  function renderHeadingText(err) {
    if (err.status && err.status !== 200) {
      return err.statusText ? `${err.status} (${err.statusText})` : err.status;
    }
    return "Oops!";
  }

  try {
    const error = useRouteError();
    const { status, statusText, message } = error;
    const is404 = status === 404;

    return (
      <>
        <Header />
        <main className={`${utilStyles.pagePadding} ${utilStyles.textCenter}`}>
          <h1 className={utilStyles.h1}>{renderHeadingText(error)}</h1>
          <p>{is404 ? "Sorry, this page does not exist." : "Sorry, an error has occurred."}</p>
          {!is404 ?
          <em>
            <p>{statusText}</p>
            <p>{message}</p>
          </em>
          : null }
          <div className={utilStyles.mt3rem}>
            <Link to="/" className={utilStyles.btn}>Visit the Homepage</Link>
          </div>
        </main>
      </>
    );

  } catch (err) {
    return (
      <main className={`${utilStyles.pagePadding} ${utilStyles.textCenter}`}>
        <h1 className={utilStyles.h1}>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. Please try again later.</p>
      </main>
    );
  }
}
