import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
// import io from "socket.io-client";
// import { useSelector } from 'react-redux';

export default function ProfilePublic() {
  return (
    <div>
      <div class="m-3">
        <h3 class="text-xl font-semibold">Chat</h3>
        <form>
          <Input placeholder="Ingrese su nombre" size="md" />
          <Input placeholder="Ingrese su mensaje" size="md" />
          <Button>Enviar</Button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Link to="/home">
        <button className="btn-custom btn-colors">Volver</button>
      </Link>
    </div>
  );
}
