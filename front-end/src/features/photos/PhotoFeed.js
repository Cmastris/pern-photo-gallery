async function fetchCollectionData(collectionSlug) {
  const fetchURL = `${process.env.REACT_APP_API_BASE_URL}/collections/${collectionSlug}`;
  const res = await fetch(fetchURL);
  if (!res.ok) {
    if (res.status === 404) {
      // https://reactrouter.com/en/main/route/error-element#throwing-manually
      throw new Response("Not Found", { status: 404 });
    }
    throw new Error("Unsuccessful collection fetch.");
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
    throw new Error("Unsuccessful photos fetch.");
  }
  const photosData = await res.json();
  return photosData;
}


export async function photoFeedLoader({ params }) {
  // https://reactrouter.com/en/main/route/loader
  let collectionData;
  let photosData;
  try {
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

  } catch (error) {
    if (error.status === 404) {
      throw error;  // Serve 404 error page
    }
    console.log('Error caught');
    return { error: "Sorry, photos could not be loaded." };
  }
}


export function PhotoFeed() {
  return (
    <>
      <h1>Photography by Chris Mastris</h1>
    </>
  );
}
