import { Link } from "react-router-dom";
import styles from "./PhotoFeedItem.module.css";

export default function PhotoFeedItem({ photoData, feedIndex }) {

  const { title, slug, filename } = photoData;

  return (
    <article>
      <Link to={`/photos/${slug}`}>
        {/* Prioritise loading of first 2 images and lazily load images beyond the first 4 */}
        <img
          src={`/photo-images/preview/${filename}`}
          alt={title}
          fetchpriority={feedIndex < 2 ? "high" : null}
          loading={feedIndex > 3 ? "lazy" : null}
          className={styles.image}
        ></img>
      </Link>
    </article>
  );
}
