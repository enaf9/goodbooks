import React from "react";

import setTabActive from "../../../store/actions/tabActions";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../store/actions/menuActions";
import { toggleForm } from "../../../store/actions/signFormActions";
import { resetMsg } from "../../../store/actions/messagesActions";

import NavLink from "./NavLink/index";

//styled components imports
import Wrapper from "./Wrapper";
import SignInOverlay from "../SignInOverlay";

import { auth } from "../../../firebase";

const MenuOverlay = props => {
  const isActive = props.active ? true : false;
  const isLogged = useSelector(state => state.loggedReducer.isLogged);
  const signOverlayIsOpen = useSelector(state => state.signFormReducer);

  const dispatch = useDispatch();

  const handleClick = async () => {
    await auth.signOut();
    dispatch(resetMsg());
  };

  const closeMenuOverlay = () => {
    dispatch(closeMenu());
  };

  async function openSignOverlay(e) {
    console.log(e.target.id);

    let promise = new Promise((resolve, reject) => {
      dispatch(setTabActive(e.target.id));
      resolve();
    });
    await promise;

    dispatch(toggleForm());
  }

  return (
    <Wrapper active={isActive} onClick={closeMenuOverlay}>
      {isLogged ? (
        <>
          <NavLink text="Knihy" url="/books" />
          <NavLink text="Autoři" url="/authors" />
          <NavLink text="Uživatelé" url="/users" />
          <NavLink text="Můj Profil" url="/my-profile" />
          <NavLink text="Odhlášení" url="/" signOut={handleClick} />
        </>
      ) : (
        <>
          <NavLink text="Knihy" url="/books" />
          <NavLink text="Autoři" url="/authors" />
          <NavLink text="Uživatelé" url="/users" />
          <NavLink text="Přihlášení" showOverlay={openSignOverlay} id="0" />
          <NavLink text="Registrace" showOverlay={openSignOverlay} id="1" />
        </>
      )}
      <SignInOverlay isOpen={signOverlayIsOpen} />
    </Wrapper>
  );
};

export default MenuOverlay;
