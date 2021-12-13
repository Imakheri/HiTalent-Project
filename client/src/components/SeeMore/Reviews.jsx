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
      <h3 class="text-xl font-semibold">Reviews del talento</h3> 
      {review?.reviews?.length > 0 ? (
        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {review?.reviews ? (
              review?.reviews?.map((e) => <div class="bg-light mb-2 rounded-md"> 
              <div>
              {
              [...Array(5)]
              .fill('')
              .map((_, i) => (
                 <StarIcon
                   key={i}
                   color={i <= (e.qualification)-1 ? "teal.500" : "gray.300"
                   }
                 />
               )) 
               }
              </div>
               {e?.description}
               </div>)
            ) : (
              <span>No han dejado ningún comentario</span>
            )}
          </Box>
        </Box>
      ) : (
        <span>Esta publicación no tiene comentarios por el momento</span>
      )}
      <hr />
    </div>
    
  );
}
