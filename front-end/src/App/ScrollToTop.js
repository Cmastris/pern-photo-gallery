import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top of page after React Router navigations (e.g. <Link> click)
// https://stackoverflow.com/a/61602724/11262798
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
