import React from 'react';
import { useEffect } from 'react';
import { Link }  from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderbyId } from '../../../actions';

export default function Orders(){

    const { id } = useParams();
    const dispatch = useDispatch();
    const order = useSelector((state) => state.index.order)
    console.log(order.orders, 'order')
    
    useEffect(() => {
        dispatch(getOrderbyId(id));
    },[dispatch, id])

    return(
        <div className='flex flex-col justify-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4'>
            <div className='flex flex-col items-center py-2'>
            <div className='flex flex-row justify-around bg-dark border border-dark w-11/12 h-auto space-x-6 mb-2'>
                <span>Talento</span><span>Numero de orden</span><span>Monto</span>
            </div>
                        {order?.orders?.length > 0 ?
                        order?.orders.map((item) => 
                            <div className='flex flex-row justify-around items-center bg-semidark border space-x-6 border-white w-11/12 h-12 m-2'>
                            {/* <div class="bg-dark flex flex-col"> */}
                                <h3>{item.title}</h3>
                                <h3>{item.id}</h3>
                                <h3>${item.price}</h3>
                                </div>
                        )
                        :
                        <div>No hay pedidos</div>
                        
                        }
                    {/* <span>{order.username}</span>
                    <span>{order.talent}</span>
                    <Link to='/order'><button className='btn-primary btn-colors'>Ver pedido</button></Link>
                    <Link to='/order'><button className='btn-primary btn-colors'>Comunicate</button></Link> */}
                </div>
            </div>
        // </div>
    )
}