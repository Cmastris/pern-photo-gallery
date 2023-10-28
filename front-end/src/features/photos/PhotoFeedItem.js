import { Link } from "react-router-dom";


export default function PhotoFeedItem({ photoData, feedIndex }) {

  const { title, slug, filename } = photoData;
  const imgSrc = `/photo-images/preview/${filename}`;

  return (
    <article>
      <Link to={`/photos/${slug}`}>
        {/* Lazily load images except for the first 4 in a feed */}
        <img src={imgSrc} alt={title} loading={feedIndex > 3 ? "lazy" : null}></img>
      </Link>
    </article>
  );
}
