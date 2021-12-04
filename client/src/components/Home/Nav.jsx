import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { searchTalent } from "../../actions";

export default function Nav() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchTalent(state));
  }
  function onChange(e) {
    e.preventDefault();
    setState(e.target.value);
  }

  return (
    <nav class="bg-semidark">
      <div class="flex justify-between items-center">
        <Link to="/home">
          <img
            src="https://www.vectorlogo.zone/logos/trayio/trayio-ar21.svg"
            alt="logo hitalent"
          />
        </Link>
        <div class="flex">
          <form onSubmit={onSubmit}>
            <div class="searchbar-inner bg-gray-200">
              <div class="searchbar-input-wrap container flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <input
                  onChange={onChange}
                  type="search"
                  class="h-10 w-52 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                  placeholder="Prueba con 'cocinar'"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
}
