import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

export default function Chat() {
  const id  = useParams()
  console.log('id params', id)
  let navigate = useNavigate();
  const user = useSelector((state) => state.index.user);
  const orders = useSelector((state) => state.index.profile);
  const [order, setOrder] = useState([]);

    let body = {
    senderId: user?.id,
    receiverId: id?.idVendedor,
  };

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
        let orderValidate = await orders?.orders?.find(
          (o) => o.post?.user?.id === id?.idVendedor
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
          onClick={onClick}
          className="btn-custom btn-colors mt-10"
        >
          Comenzar conversación
        </button>
      ) : (
        <p>Para comenzar una conversación debes adquirir un curso</p>
      )}
      </div>
    )
}