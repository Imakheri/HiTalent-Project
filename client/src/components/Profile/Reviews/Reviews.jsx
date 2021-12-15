import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviewbyId } from "../../../actions/index";
import { Alert, AlertIcon, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function Reviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.index.review);

  useEffect(() => {
    dispatch(getReviewbyId(id));
  }, [dispatch, id]);

  return (
    <div className="flex flex-col justify-center bg-semidark border-2 text-white border-white rounded-lg w-11/12 py-4">
      <Table>
        <Thead>
          <Tr class="bg-semidark">
            <Th>Talento</Th>
              <Th>Usuario</Th>
              <Th>Puntaje</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
          !(review.posts?.length > 0) ? (
          <Td>No tienes publicaciones para obtener reseñas...</Td>
        ) : review.posts[0].reviews.length > 0 ? (
          review.posts.map((e) => (
            <Tr>
              <Td className="p-2">{e.title}</Td>
              <Td className="px-2 font-black italic">{e.reviews[0]?.user?.username}</Td>
              <Td>{e.reviews[0]?.qualification}</Td>
            </Tr>
          ))
        ) : (
          <h1>No tienes reseñas por el momento...</h1>
        )}
        </Tbody>
      </Table>
{/*                 
        {!(review.posts?.length > 0) ? (
          <h2>No tienes publicaciones para obtener reseñas...</h2>
        ) : review.posts[0].reviews.length > 0 ? (
          review.posts.map((e) => (
            <div className="flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1">
              <span className="p-2">{e.title}</span>
              <span className="px-2 font-black italic">
                {e.reviews[0]?.user?.username}
              </span>
              <span>{e.reviews[0]?.qualification}</span>
            </div>
          ))
        ) : (
          <h1>No tienes reseñas por el momento...</h1>
        )}
         */}
      </div>
  );
}
