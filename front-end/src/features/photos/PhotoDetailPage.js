import { useLoaderData } from "react-router-dom";


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
  return photoData;
}

export function PhotoDetailPage() {
  const { title, summary_text, detail_text, location, date_taken, filename } = useLoaderData();

  function getMonthYearString(rawString) {
    const options = { year: "numeric", month: "long"};
    return new Date(rawString).toLocaleString("en-GB", options);
  }

  return (
    <>
      <img
          src={`/photo-images/large/${filename}`}
          alt={title}
          fetchpriority="high"
      ></img>
      <h1>{title}</h1>
      <div>
        <p>{location}</p>
        <p>{getMonthYearString(date_taken)}</p>
      </div>
      <p>{summary_text}</p>
      <p>{detail_text}</p>
    </>
  );
}
