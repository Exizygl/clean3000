import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { updateAvis } from '../actions';




const Header = () => {
  
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const resetState = () =>{
    dispatch(updateAvis("intervenant", ""));
    dispatch(updateAvis("client", ""));
    dispatch(updateAvis("date", ""));
    dispatch(updateAvis("observation", ""));

    navigate('/');


  }

  return (
    <header>
        <img src="./img/logo-clean3000-transparent.png" onClick={() =>resetState()} alt="" />
        
    </header>
  )
}

export default Header