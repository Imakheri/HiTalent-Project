import React from "react";
import { useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from '../../assets/profile_default.png'
import { cargarUsuario } from "../../actions";

export default function Dropdown() {
  const userState = useSelector((state) => state.index.user);
  const userImage = useSelector((state) => state.index.profile);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log('Estoy dentro del useEffect de Dropdown')
    },[userImage])

const logOut = (e) => {
  e.preventDefault();
  dispatch(cargarUsuario([]))
}    
  return (
    <Menu>
      <MenuButton class="m-3 h-9 w-9" as={Button}>
        <img
          class="h-9 w-9 border-solid border-black rounded-full"
          src={userState.image? userImage.image : defaultImage}
          alt="user_image"
        />
      </MenuButton>
      <MenuList class="bg-light m-2">
        <MenuGroup>Hola <b>{userState.username}</b></MenuGroup>
        <MenuDivider/>
        <Link to={"/profile/" + userState.id}>
          <MenuItem>Mi perfil</MenuItem>
        </Link>
        <Link to="/createTalent">
          <MenuItem>Publicar</MenuItem>
        </Link>
        <Link to={"/cart"}>
          <MenuItem>Carrito</MenuItem>
        </Link>
        <Link to="/faq">
          <MenuItem>Preguntas frecuentes</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem onClick={e=> logOut(e)}>Cerrar sesion</MenuItem>
      </MenuList>
    </Menu>
  );
}
