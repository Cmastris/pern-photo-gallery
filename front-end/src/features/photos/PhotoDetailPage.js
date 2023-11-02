import { Link, useLoaderData } from "react-router-dom";


async function fetchPhotoData(slug) {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/photos/${slug}`);
  if (!res.ok) {
    if (res.status === 404) {
      // https://reactrouter.com/en/main/route/error-element#throwing-manually
      throw new Response("Photo not found", { status: 404, statusText: "Not Found" });
    }
    throw new Error("Photo data could not be retrieved.");
  }
  const photoData = await res.json();
  return photoData;
}


async function fetchPhotoCollectionsData(photoId) {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/collections?photo_id=${photoId}`);
  if (!res.ok) {
    throw new Error("Collections data could not be retrieved.");
  }
  const collectionsData = await res.json();
  return collectionsData;
}


export async function photoLoader({ params }) {
  // https://reactrouter.com/en/main/route/loader
  const photoData = await fetchPhotoData(params.slug);
  let relatedCollections = null;
  try {
    const collectionsData = await fetchPhotoCollectionsData(photoData.id);
    if (collectionsData.length > 0) {
      relatedCollections = collectionsData;
    }
    return { photoData, relatedCollections };
  } catch(err) {
    // Return `null` collections if fetch unsuccessful rather than rendering error page
    return { photoData, relatedCollections };
  }
}

export function PhotoDetailPage() {
  const { photoData, relatedCollections } = useLoaderData();
  const { title, summary_text, detail_text, location, date_taken, filename } = photoData;
  const largeFilePath = `/photo-images/large/${filename}`;
  const smallFilePath = `/photo-images/small/${filename}`;

  function getMonthYearString(rawString) {
    const options = { year: "numeric", month: "long"};
    return new Date(rawString).toLocaleString("en-GB", options);
  }

  function renderRelatedCollections() {
    const links = relatedCollections.map((c, index) => {
      return (
        <li key={index}>
          <Link to={`/collections/${c.slug}`}>{c.name}</Link>
        </li>
      );
    });
    
    return (
      <>
        <h2>Explore Related Collections</h2>
        <ul>
          {links}
        </ul>
      </>
    );
  }

  return (
    <>
      <img
          fetchpriority="high"
          src={largeFilePath}
          srcSet={`${largeFilePath} 1500w, ${smallFilePath} 600w`}
          alt={title}
      ></img>
      <h1>{title}</h1>
      <div>
        <p>{location}</p>
        <p>{getMonthYearString(date_taken)}</p>
      </div>
      <p>{summary_text}</p>
      <p>{detail_text}</p>
      {relatedCollections ? renderRelatedCollections() : null}
    </>
  );
}
