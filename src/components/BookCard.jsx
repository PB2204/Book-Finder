const Card = ({ data }) => {
  return (
    <div className=" mt-6 flex" to={data.id}>
      <img
        className="w-20 object-cover"
        src={data?.volumeInfo?.imageLinks?.smallThumbnail.replace(
          /&edge=curl/gi,
          ""
        )}
        alt={data?.volumeInfo?.title}
      />
      <div className="px-7 py-4">
        <h2 className="text-lg font-bold">{data?.volumeInfo?.title}</h2>
        <p className="mt-2">
          <span className="font-bold">Author: </span>
          {data?.volumeInfo?.authors}
        </p>
      </div>
    </div>
  );
};

export default Card;
