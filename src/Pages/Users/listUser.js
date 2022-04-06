import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from '../../config/configApi';
import {
    Table,    
    ButtonViewer,
    ButtonEdit,
    ButtonDelete

}
    from '../Users/css/styles';



export const Users = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getUsers = async () => {


        //Cabeçalho  e token
        const headers = {
            'headers': {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }


        await api.get('/userView', headers)
            .then((response) => {
                //Console.log(response)
                setData(response.data.usuarios)


            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        message: err.response.data.message
                    });
                } else {
                    setStatus({
                        type: 'error',
                        message: "Sem Dados"
                    });

                }
            })
    }



    useEffect(() => {
        getUsers()

    }, []);

    const deleteUser = async (idUser) => {

        //Cabeçalho  e token
        const headers = {
            'headers': {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }


        await api.delete("/delUsuario/" + idUser, headers)
            .then((response) => {
                setStatus({
                    type: "success",
                    message: response.data.message
                })
                getUsers()


            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: "error",
                        message: err.response.data.message
                    })

                } else {

                }
            })


    }


    return (
        <>
            <h1>Listagem de Usuarios</h1><br />
            <Link to='/dashboard'>Pagina Principal</Link><br />
            <Link to='/add-user'>Cadastrar Usuário</Link><br /> <hr /><br />

            {status.type === "success" ? <p>{status.message}</p> : ""}
            {status.type === "error" ? <p>{status.message}</p> : ""}

            <Table>
                <th>ID</th>
                <th>Nome</th>
                <th>Usuario</th>
                <th>Acoes</th>

                {data.map(usuarios => (
                    <tr key={usuarios.id}>
                        <td> {usuarios.id}</td>
                        <td> {usuarios.nome}</td>
                        <td> {usuarios.usuario}</td>
                        
                        
                        <td><Link to={"/view-user/" + usuarios.id}><ButtonViewer type="button">Visualizar</ButtonViewer></Link>
                        <Link to={"/edit-user/" + usuarios.id}><ButtonEdit type="button">Editar</ButtonEdit></Link>
                        <Link to={"#"}><ButtonDelete type="button" onClick={() => deleteUser(usuarios.id)}>Excluir</ButtonDelete></Link></td>                        
                    </tr>
                ))}
            </Table>
        </>
    )
}