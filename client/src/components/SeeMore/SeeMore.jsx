import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTalentById } from "../../actions";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";
import { Link } from "react-router-dom";
import { Box, useToast, Button, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function SeeMore() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { id } = useParams();
  const seemore = useSelector((state) => state.index.moreTalent);
  console.log(seemore);

  useEffect(() => {
    dispatch(getTalentById(id));
  }, [dispatch, id]);

  let mercadopago = { title: seemore.title, total: seemore.cost };

  async function handleCheckOut(e) {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:3001/checkout/mercadopago/",
      mercadopago
    );
    window.location.href = response.data.init_points;
  }

  return (
    <div className="seemore">
      <Nav />
      {seemore ? (
        // <div class="flex flex-col items-center rounded-md border-2 bg-light border-semilight w-1/2 m-4">
        //     <h1 class="text-3xl font-semibold">{seemore.title}</h1>
        //     <div class="w-1/2">
        //         <img src={seemore.image} alt="talent_image"/>
        //     </div>
        //     <h4 class="text-xl font-semibold">Acerca de este servicio</h4>
        //     {seemore.description}
        //     <h4>Costo: ${seemore.cost}</h4>
        //     {/* <h4>{seemore.user.username}</h4> */}
        //     <div class="flex">
        //         <button class="bg-semidark w-24 rounded-full hover:bg-semilight text-black m-4">Comprar</button>
        //         <Button onClick={() =>
        //                 toast({
        //                 position: 'bottom-right',
        //                 render: () => (
        //                 <Box color='white' p={3} bg='green.500'>
        //                     Agregado al carrito
        //                 </Box>
        //                 ),
        //                 })
        //                 }
        //                 class="bg-semidark w-24 rounded-full hover:bg-semilight text-black m-4">Agregar al carrito</Button>
        //     </div>
        //     <Link to='/home'>
        //     <button class="bg-semidark w-24 rounded-full hover:bg-semilight text-black m-4">Volver</button>
        //     </Link>
        // </div> : <p>Cargando...</p>
        <Box
          m="2"
          maxW="lg"
          borderWidth="1px"
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
                {id} USERNAME
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
              <Box as="span" color="gray.600" fontSize="sm">
                $
              </Box>
              {seemore.cost}
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < seemore.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {seemore.reviewCount} reviews
              </Box>
              <Box>
                <Button onClick={(e) => handleCheckOut(e)}>Comprar</Button>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  <Button
                    onClick={() =>
                      toast({
                        position: "bottom-right",
                        render: () => (
                          <Box color="white" p={3} bg="green.500">
                            Agregado al carrito
                          </Box>
                        ),
                      })
                    }
                  >
                    Agregar al carrito
                  </Button>
                </Box>
              </Box>
              <Box>
                <Link to="/home">
                  <Button>Volver</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <p>Cargando</p>
      )}
      <Footer />
    </div>
  );
}
