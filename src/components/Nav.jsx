import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <header>
      <nav className="container mx-auto flex  max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={logo} alt="brand logo" />
          <h1 className="font-mono text-2xl font-bold tracking-widest text-teal-800">
            BookFinder
          </h1>
        </NavLink>
        <form
          method="get"
          className="flex items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-sm bg-inherit py-2 px-3 ring-2 ring-teal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-900"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-sm bg-teal-500 px-4 py-2 font-semibold text-slate-50"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Nav;
