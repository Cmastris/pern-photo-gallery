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
  console.log(collectionData);
  console.log(photosData);
  return { collectionData, photosData };
}


export function PhotoFeed() {
  return (
    <>
      <h1>Photography by Chris Mastris</h1>
    </>
  );
}
