import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import { publicProfile } from "../../actions";
import Nav from "../Profile/Nav";
import Footer from "../Landing/Footer";
import Chat from "./Chat";
import defaultImage from "../../assets/profile_default.png";

export default function ProfilePublic() {
  const id = useParams();
  // const user = useSelector((state) => state.index.user);
  // const orders = useSelector((state) => state.index.profile);
  const sellerProfile = useSelector((state) => state.index.public_profile);
  // let navigate = useNavigate();
  // const [order, setOrder] = useState([]);
  const dispatch = useDispatch();
  // console.log(sellerProfile)

  // let body = {
  //   senderId: user.id,
  //   receiverId: id.idVendedor,
  // };

  useEffect(() => {
    dispatch(publicProfile(id.idVendedor));
    // console.log('id user effect',id.idVendedor)
  }, [dispatch, id.idVendedor]);

  // async function onClick(e) {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:3001/conversation", body);
  //     console.log(res.data);
  //     navigate("/messenger");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {

  //   const validate = async () => {
  //     try {
  //       let orderValidate = await orders.orders?.find(
  //         (o) => o.post.user.id === id.idVendedor
  //       );
  //       setOrder(orderValidate);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   validate();
  // }, [orders, id]);
  return (
    <div class="">
      <Nav />
      <div class="min-h-screen m-2">
        <img
          class="rounded-full"
          src={sellerProfile?.image ? sellerProfile?.image : defaultImage}
          alt=""
        />
        {sellerProfile?.fullName}
        {sellerProfile?.username}
        <Chat />
        {/* {order ? (
        <button
          onClick={(e) => onClick(e)}
          className="btn-custom btn-colors mt-10"
        >
          Comenzar conversación
        </button>
      ) : (
        <p>Para comenzar una conversación debes adquirir un curso</p>
      )}
      <br />
      <br />
      <br />
      <Link to="/home">
        <button className="btn-custom btn-colors">Volver</button>
      </Link> */}
      </div>
      <Link to="/home">
        <button class="bg-dark w-28 rounded-lg m-2 text-white">Volver</button>
      </Link>
      <Footer />
    </div>
  );
}
