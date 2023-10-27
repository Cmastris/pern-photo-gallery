import { Link, useRouteError } from "react-router-dom";
import Header from "../Header/Header";

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
        <main>
          <h1>{renderHeadingText(error)}</h1>
          <p>{is404 ? "Sorry, this page does not exist." : "Sorry, an error has occurred."}</p>
          {!is404 ?
          <em>
            <p>{statusText}</p>
            <p>{message}</p>
          </em>
          : null }
          <hr></hr>
          <Link to="/">Visit the homepage</Link>
        </main>
      </>
    );

  } catch (err) {
    return (
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. Please try again later.</p>
      </main>
    );
  }
}
