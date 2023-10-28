export async function photoLoader({ params }) {
  // https://reactrouter.com/en/main/route/loader
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/photos/${params.slug}`);
  if (!res.ok) {
    if (res.status === 404) {
      // https://reactrouter.com/en/main/route/error-element#throwing-manually
      throw new Response("Photo not found", { status: 404, statusText: "Not Found" });
    }
    throw new Error("Photo data could not be retrieved.");
  }
  const photoData = await res.json();
  console.log(photoData);
  return photoData;
}

export function PhotoDetailPage() {
  return (
    <>
      <h1>Photo Detail Page</h1>
    </>
  );
}
