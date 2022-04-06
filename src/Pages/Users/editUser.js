import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from '../../config/configApi';

export const EditUser = () => {

    const { id } = useParams();
    console.log("O ID e: " + id);

    //receber os dados
   // const [data, setData] = useState('');

   //setar os valores no campo ao editar
   const[nome, setNome] = useState('');
   const[usuario, setUsuario] = useState('');
   const[password, setPassword] = useState('');




    const [status, setStatus] = useState({
        type: '',
        message: ""
    });

    const editUser = async e =>{


        const headers = {
            'headers': {
                'Content-Type': 'application/json',
                'Authotization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        e.preventDefault()
        await api.put("/editUsuario", {id, nome, usuario, password},headers)
        .then((response)=>{
            setStatus({
                type:"success",
                message:response.data.message
            })
        }).catch((err)=>{
            if(err.response){
                setStatus({
                    type:"error",
                    message:err.response.data.message
                })

            }else{
                setStatus({
                    type:"error",
                    messsage:"Erro. Tente mais tarde!!"
                })
            }
        })
    }

    useEffect(() => {
        const getUser = async () => {

            const headers = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Authotization': 'Bearer ' + localStorage.getItem('token')
                }
            }
            await api.get('/userView/' + id, headers)
                .then((response) => {
                   // console.log(response.data.usuario)
                    if (response.data.usuario) {
                        setNome(response.data.usuario.nome)
                        setUsuario(response.data.usuario.usuario)                        

                    } else {
                    console.log("Usuario nao encontrado")

                    }

                }).catch((err) => {
                    if (err.response) {
                        setStatus({
                            type: "error",
                            message: err.response.data.message
                        })

                    } else {
                        setStatus({
                            type: 'error',
                            message: "Erro! Tente mais tarde"
                        })

                    }


                })
        }




        getUser();
    }, [id])


    return (
        <div>
            <h1>Editar Usuario</h1>
            {status.type === "success" ? <p>{status.message}</p>:""}
            {status.type === "error" ? <p>{status.message}</p>:""}

            {/* 3 mensagens
           1 - nao encontrou (warning)
           2 - nao editou (error)
           3 - API editou (success) 
           implementar
           */}

           <form onSubmit={editUser}>
               <label>Nome:</label><br />
               <input type="text" name="nome" placeholder="nome Completo" value={nome} onChange={text => setNome(text.target.value) }></input> <br /><br />
               <label>Usuario:</label><br />
               <input type="text" name="usuario" placeholder="Digite o usuario" value={usuario} onChange={text => setUsuario(text.target.value)}></input> <br /><br />
               <label>Senha:</label><br />
               <input type="password" name="password" placeholder="Digite o senha" onChange={text=> setPassword(text.target.value)}></input> <br /><br />

               <button type="submit"> Salvar</button>

           </form>



        </div>
    )
}