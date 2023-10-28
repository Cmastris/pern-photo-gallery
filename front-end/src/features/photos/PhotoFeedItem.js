import { Link } from "react-router-dom";


export default function PhotoFeedItem({ photoData }) {

  const { title, slug, filename } = photoData;

  return (
    <article>
      <Link to={`/photos/${slug}`}>
        <img src={`/photo-images/preview/${filename}`} alt={title}></img>
      </Link>
    </article>
  );
}
