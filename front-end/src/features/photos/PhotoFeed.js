import { useLoaderData } from "react-router-dom";

import PhotoFeedItem from "./PhotoFeedItem";
import styles from "./PhotoFeed.module.css";
import utilStyles from "../../App/utilStyles.module.css";


async function fetchCollectionData(collectionSlug) {
  const fetchURL = `${process.env.REACT_APP_API_BASE_URL}/collections/${collectionSlug}`;
  const res = await fetch(fetchURL);
  if (!res.ok) {
    if (res.status === 404) {
      // https://reactrouter.com/en/main/route/error-element#throwing-manually
      throw new Response("Collection not found", { status: 404, statusText: "Not Found" });
    }
    throw new Error("Collection data could not be retrieved.");
  }
  const collectionData = await res.json();
  return collectionData;
}


async function fetchPhotos(collectionId = null) {
  let fetchURL = `${process.env.REACT_APP_API_BASE_URL}/photos`;
  if (collectionId) {
    fetchURL += `?collection_id=${collectionId}`;
  }
  const res = await fetch(fetchURL);
  if (!res.ok) {
    throw new Error("Photos data could not be retrieved.");
  }
  const photosData = await res.json();
  return photosData;
}


export async function photoFeedLoader({ params }) {
  // https://reactrouter.com/en/main/route/loader
  let collectionData;
  let photosData;
  if (params.slug) {
    // Fetch collection data and filtered photo data
    collectionData = await fetchCollectionData(params.slug);
    photosData = await fetchPhotos(collectionData.id);
  } else {
    // Fetch all photos data
    photosData = await fetchPhotos();
  }
  return { collectionData, photosData };
}


export function PhotoFeed() {

  const { collectionData, photosData } = useLoaderData();

  function renderFeedItems() {
    if (photosData.length === 0) {
      return <p>Sorry, no photos were found.</p>;
    }
    const feedItems = photosData.map((p, index) => {
      return <PhotoFeedItem key={index} photoData={p} feedIndex={index} />;
    });
    return <div className={styles.photoGrid}>{feedItems}</div>;
  }

  return (
    <div className={`${utilStyles.pagePadding} ${utilStyles.textCenter}`}>
      <h1 className={utilStyles.h1}>{ collectionData ? collectionData.name : "Photography by Chris Mastris" }</h1>
      <p>{
        collectionData ?
        collectionData.description
        :
        "View my entire portfolio below or browse specific collections."
      }</p>
      {renderFeedItems()}
    </div>
  );
}
