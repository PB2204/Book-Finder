import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/BookCard";

function Search() {
  let { key } = useParams();
  const FEILDS =
    "kind,totalItems,items(id,selfLink,volumeInfo(title,authors,description,pageCount,averageRating,imageLinks))";
  const MAX_RESULTS = 20;
  const GOOGLE_BOOKS_API =
    "https://www.googleapis.com/books/v1/volumes?" +
    new URLSearchParams({
      q: key,
      fields: FEILDS,
      maxResults: MAX_RESULTS,
    });
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${GOOGLE_BOOKS_API}`)
      .then((response) => response.json())
      .then((object) => {
        setItems(object.items);
      });
    // eslint-disable-next-line
  }, [key]);

  return (
    <div className="py-10">
      <h1 className="text-xl font-bold">Showing results for {key}</h1>
      <div className="grid-cols-1 md:grid md:grid-cols-2">
        {items.map((e, i) => (
          <Card data={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Search;
