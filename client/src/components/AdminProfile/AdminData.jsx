import axios from "axios";
import { useEffect, useState } from "react";
import BotonOptions from "./BotonOptions";

function AdminData({ pestaña, data, setData }) {
  let [put, setPut] = useState(false);

  console.log("DATA: ", data);
  useEffect(() => {
    axios.get(`http://localhost:3001/admin`).then((res) =>
      setData({
        user: res.data.users,
        post: res.data.posts,
        review: res.data.review,
      })
    );
  }, [put]);

  function botonClick(e) {
    e.preventDefault();
    let aux = {
      id: e.target.value,
      name: pestaña,
    };
    setPut(!put);
    axios
      .put(`http://localhost:3001/admin`, aux)
      .then((res) => res)
      .catch((err) => console.log("ESTE ES EL ERROR DEL PUT: ", err));
  }

  function funcionBorrar(e) {
    e.preventDefault();
    let aux = {
      id: e.target.value,
      name: pestaña,
    };
    setPut(!put);
    axios
      .delete("http://localhost:3001/admin", { data: aux })
      .then((res) => console.log(res))
      .catch((err) => console.log("ESTE ES EL ERROR DEL DELETE: ", err));
  }

  return (
    <div>
      {
        //Caso de que sea la pestaña usuarios
        pestaña === "user" ? (
          <table>
            <tr>
              <th>FullName</th>
              <th>Username</th>
              <th>Email</th>
              <th>Verificado</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
            {data[`${pestaña}`].map((el) => {
              return (
                <tr key={el.id} className="bg-dark border w-max">
                  <td>{el.fullName}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  {el.email_verified ? <td>Si</td> : <td>No</td>}
                  {el.aprobado ? <td>Aprobado</td> : <td>Pendiente</td>}
                  <td>
                    <BotonOptions
                      estado={el.aprobado}
                      value={el.id}
                      botonClick={botonClick}
                      funcionBorrar={funcionBorrar}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        ) : //Caso de que sea la pestaña Post
        pestaña === "post" ? (
          <table>
            <tr>
              <th>Titulo</th>
              <th>Docente</th>
              <th>Costo</th>
              <th>Puntaje</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
            {data[`${pestaña}`].map((el) => {
              return (
                <tr key={el.id} className="bg-semidark border w-max">
                  <td>{el.title}</td>
                  <td>{el[`user.username`]}</td>
                  <td>{el.cost}</td>
                  <td>{el.rating}</td>
                  {el.aprobado ? <td>Aprobado</td> : <td>Pendiente</td>}
                  <td>
                    <BotonOptions
                      value={el.id}
                      botonClick={botonClick}
                      funcionBorrar={funcionBorrar}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          //Caso de que sea la pestaña Review
          <table>
            <tr>
              <th>Usuario</th>
              <th>Calificacion</th>
              <th>Reseña</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
            {data[`${pestaña}`].map((el) => {
              return (
                <tr key={el.id} className="bg-semilight border w-max">
                  <td>{el[`user.username`]}</td>
                  <td>{el.qualification}</td>
                  <td>{el.description}</td>
                  {el.aprobado ? <td>Aprobado</td> : <td>Pendiente</td>}
                  <td>
                    <BotonOptions
                      value={el.id}
                      botonClick={botonClick}
                      funcionBorrar={funcionBorrar}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        )
      }
    </div>
  );
}

export default AdminData;
