import React from "react";

export const QandA = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Q&A</h1>
      <ul className="reviews-info">
        <li>
          <form className="px-2 py-1">
            <label>
              <input className="mr-2" type="checkbox" />
              Pregunta 1
            </label>
            <br />
            <button className="w-full text-center">Responder</button>
          </form>
        </li>
      </ul>
    </div>
  );
};
