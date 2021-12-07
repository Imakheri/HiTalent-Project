import React from "react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostReview } from "../../actions/index";

export default function Reviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.index.review);

  useEffect(() => {
    dispatch(getPostReview(id));
  }, [dispatch, id]);

  return (
    <div class="m-3">
      <h3 class="text-xl font-semibold">Reviews del talento</h3> <hr />
      {review?.reviews?.length > 0 ? (
        <Box display="flex" mt="2" alignItems="center">
          {
            review?.reviews.map((e) => (
              <StarIcon
                key={e}
                color={
                  e <= review?.reviews?.qualification ? "teal.500" : "gray.300"
                }
              />
            ))
            // Array(5)
            // .fill('')
            // .map((i) => (
            //   <StarIcon
            //   key={i}
            //   color={i <= seemore?.reviews?.rating ? 'teal.500' : 'gray.300'}
            //   />
            // ))
          }
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {review?.reviews ? (
              review?.reviews?.map((e) => e?.description)
            ) : (
              <span>No han dejado ningún comentario</span>
            )}
          </Box>
        </Box>
      ) : (
        <span>Esta publicación no tiene comentarios por el momento</span>
      )}
    </div>
  );
}
