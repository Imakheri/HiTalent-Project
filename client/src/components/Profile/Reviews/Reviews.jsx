import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviewbyId, getUserbyId } from "../../../actions/index";

export default function Reviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.index.review);

  useEffect(() => {
    dispatch(getReviewbyId(id));

    // dispatch(getReviewbyId(reviews?.posts?.map((e) => e.id)));
  }, [dispatch, id]);

  return (
    <div className="flex flex-col justify-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4">
      <div className="flex flex-col items-center py-2">
        {
        review.posts.length 
        ? 
        (
          review?.posts?.map((e) => (
            <div className="flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1">
              <span className="p-2">{e.title}</span>
              <span className="px-2">{!e.reviews.description ? "No hay reviews": e.reviews.description}</span>
              <span className="px-2 font-black italic">
                {e.reviews?.user?.username}
              </span>
              <span>{e.reviews?.rating}</span>
            </div>
          ))
        ) 
        :
        (
          <h2>No tienes publicaciones para obtener reseñas...</h2>
        )
        }
      </div>
    </div>
  );
}
