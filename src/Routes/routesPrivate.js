import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import {Context} from '../Context/AuthContext'

import { Login3 } from "../Pages/Login";
import {Dashboard} from '../Pages/Dashboard'


//...rest recebe todos os valores da rota 
function CustomRoute({isPrivate, ...rest}){

    //verifica se o usuario esta logado(Context)
    const {authenticated} = useContext(Context);  
    
    // Se a rota é privada e o usuario nao estiver autenticado
    if(isPrivate && !authenticated){
     return <Link to="/"></Link>
    }
    return <Route {...rest} />


}

export default function  RotasPrivadas(){
    return(
        <BrowserRouter>
          <Routes>
            <CustomRoute path="/" element={<Login3 />} />
            <CustomRoute isPrivate path="/dashboard" element={<Dashboard />} />           
          </Routes>
        </BrowserRouter>
    )
}