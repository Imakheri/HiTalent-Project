import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import io from "socket.io-client";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";

export default function ProfilePublic() {
  const id = useParams();
  const user = useSelector((state) => state.index.user);
  const orders = useSelector((state) => state.index.profile);
  let navigate = useNavigate();
  const [order, setOrder] = useState([]);

  let body = {
    senderId: user.id,
    receiverId: id.idVendedor,
  };
  console.log(body);

  async function onClick(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/conversation", body);
      console.log(res.data);
      navigate("/messenger");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const validate = async () => {
      try {
        let orderValidate = await orders.orders?.find(
          (o) => o.post.user.id === id.idVendedor
        );
        setOrder(orderValidate);
      } catch (error) {
        console.log(error);
      }
    };
    validate();
  }, [orders, id]);

  return (
    <div>
      {order ? (
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
      </Link>
    </div>
  );
}
