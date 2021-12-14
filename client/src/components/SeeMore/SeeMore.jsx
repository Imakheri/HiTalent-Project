import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTalentById } from "../../actions";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";
import { Link } from "react-router-dom";
import { Box, useToast, Button, Image } from "@chakra-ui/react";
import QyA from "./Q&A";
import QyAanswer from "./Q&Aanswer";
import Reviews from "./Reviews";
import axios from "axios";
import { addToCart } from "../../actions/shoppingActions";
import Spinner from "../Spinner/Spinner";

export default function SeeMore() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { id } = useParams();
  const seemore = useSelector((state) => state.index.moreTalent);
  const user = useSelector((state) => state.index.user);
  let mercadopago = { title: seemore.title, total: seemore.cost };

  useEffect(() => {
    dispatch(getTalentById(id));
  }, [dispatch, id]);

  async function handleCheckOut(e) {
    let payload = { carrito: [] };

    payload.carrito.push({
      user_id: user?.id,
      post_id: seemore.id,
      title: seemore.title,
      price: seemore.cost,
    });
    console.log("ordenes", payload);
    axios
      .post("http://localhost:3001/orden", payload)
      .then((res) => console.log("res de seemore", res))
      .catch((error) => console.log("err de seemore", error));

    console.log("mercadopago", mercadopago);
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:3001/checkout/mercadopago/",
      mercadopago
    );
    console.log(response);
    window.location.href = response.data.init_points;
  }

  function onClick(e) {
    e.preventDefault();
    dispatch(
      addToCart({ title: seemore.title, cost: seemore.cost, id: seemore.id })
    );
    toast({
      position: "bottom-right",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          Agregado al carrito
        </Box>
      ),
    });
  }

  return (
    <div className="seemore">
      <Nav />
      {seemore ? (
        <Box
          m="auto"
          mt="2"
          mb="2"
          maxW="lg"
          maxH="80em"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={seemore.image} alt="talent_image" />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {/* By: {seemore.user.username} */}
              </Box>
            </Box>

            <Box
              mt="2"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              fontSize="25"
              isTruncated
            >
              {seemore.title}
            </Box>

            <Box>{seemore.description}</Box>

            <Box>
              <Box as="span" color="gray.600 fontSize=-sm">
                Idioma:
              </Box>
              {seemore?.language}
            </Box>

            <Box>
              <Box as="span" color="gray.600 fontSize=-sm">
                Huso horario:
              </Box>
              {seemore?.timeZone}
            </Box>

            <Box>
              <Box as="span" color="gray.600" fontSize="sm">
                $
              </Box>
              {seemore.cost}
            </Box>
            {seemore.user_id !== user.id ? (
              <Box class="flex flex-col items-center" m="2">
                <Button onClick={(e) => handleCheckOut(e)}>Comprar</Button>
                <Box as="span" m="2" color="gray.600" fontSize="sm">
                  <Button onClick={onClick}>Agregar al carrito</Button>
                </Box>
                <Link to={"/profilePublic/" + seemore.user_id}>
                  <button className="btn-custom btn-colors mt-10">
                    Ver perfil
                  </button>
                </Link>
              </Box>
            ) : (
              <>
                <br />
                <hr />
                <div>Esta publicacion te pertenece</div>
              </>
            )}
          </Box>
          <QyAanswer />
          <Reviews />
          {seemore.user_id !== user.id && <QyA />}

          <Box>
            <Link to="/home">
              <Button m="2">Volver</Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Spinner />
      )}
      <Footer />
    </div>
  );
}
