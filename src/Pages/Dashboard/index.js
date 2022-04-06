import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Navbar, MaxWidth, Logo, LinkTo} from "../Dashboard/styles"


import { Context } from '../../Context/AuthContext'


export const Dashboard = () => {

    //recupera o token no localstorage
    // const token = localStorage.getItem('token')

    const { authenticated, handleLogout } = useContext(Context);
    // console.log("Situacao do usuario na pagina DashBoard "  + authenticated)


    return (
        <div>
            <Navbar>
                <MaxWidth>    
                   <Logo>Dashboard</Logo>
                    <LinkTo>                         
                            <Link to="/">Login</Link>
                            <Link to="/list-user">Listagem de Usuarios</Link>
                            <Link to="/add-user">Cadastro de Usuarios</Link>                           
                                          
                    </LinkTo>
                </MaxWidth>
            </Navbar>
            <button type="button" onClick={handleLogout}>Sair do sistema</button> <br /> <br />








        </div>
    )
}