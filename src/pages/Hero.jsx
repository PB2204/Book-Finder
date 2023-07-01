import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="flex flex-wrap-reverse gap-8 py-10 md:flex-nowrap">
      <div className="flex flex-col gap-4 self-center">
        <h2 className="font-['Space_Grotesk'] text-5xl text-slate-700">
          Find your next book to read.
        </h2>
        <a
          href="/explore"
          className="mt-4 max-w-max bg-teal-500 px-4 py-2 text-xl font-bold text-teal-50"
        >
          Explore
        </a>
      </div>
      <img
        src={heroImage}
        className="max-w-md rounded-sm"
        alt="A man reading book"
      />
    </section>
  );
}

export default Hero;
