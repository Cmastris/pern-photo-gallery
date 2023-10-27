async function fetchPhotos() {
  const fetchURL = `${process.env.REACT_APP_API_BASE_URL}/photos`;
  const res = await fetch(fetchURL);
  if (!res.ok) {
    throw new Error("Unsuccessful photos fetch.");
  }
  const photosData = await res.json();
  return photosData;
}

export async function photoFeedLoader() {
  // https://reactrouter.com/en/main/route/loader
  try {
    const photosData = await fetchPhotos();
    console.log(photosData);
    return { photosData };

  } catch (error) {
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
