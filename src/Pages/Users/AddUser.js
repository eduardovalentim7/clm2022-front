import React, {useState} from "react";
import { Link, Navigate} from 'react-router-dom';
import api  from '../../config/configApi';
import {
    Form,
    ButtonEdit


} from "./css/styles"



export const AddUser = () => {

   //const navigate = useNavigate();

const [usuario, setUsuario]= useState({
    nome:"",
    usuario:"",
    password:""
});

const [msg, setMsg] = useState({
    type:"",
    message:""
})

//pega o valores dos campos 
const valueInput  = e => setUsuario({...usuario, [e.target.name]: e.target.value});

const addUser = async e =>{
    e.preventDefault();
    console.log(usuario)

const headers = {
    'headers': {
        'Content-Type': 'application/json',
        'Authotization': 'Bearer ' + localStorage.getItem('token')
    }
}

    await api.post('/cadUsuario', usuario, headers)
    .then((response)=>{
       // console.log(response.data.message)
        setMsg({
            type:"success",
            message:response.data.message
        })

       
        

    }).catch((err)=>{
        if(err.response){
            console.log(err.response.data.message)
            setMsg({
                type:"erro",
                message:err.response.data.message
            })
        }else{
            console.log("Erro.Tente mais tarde!!")

        }

    })
}



    return (
        <div>
            <h1>Cadastro de Usuários</h1>
            <Link to='/dashboard'>Pagina Principal</Link><br /><br />

            {msg.type === 'erro' ? <p style={{color:"red"}}>{msg.message}</p>:""}
            {msg.type === 'success' ? <Navigate to="/list-user"/> :""}
             


           

            <Form onSubmit={addUser}> 
                <label>Nome:</label><br />
                <input type="text" name="nome" placeholder="Digite o nome" onChange={valueInput}/><br /><br />
                <label>Usuário:</label><br />
                <input type="text" name="usuario" placeholder="Digite o Usuário" onChange={valueInput}/><br /><br />
                <label>Senha:</label><br />
                <input type="password" name="password" placeholder="Digite a senha " onChange={valueInput}/><br /><br />
                <ButtonEdit type="submit">Cadastrar</ButtonEdit>
            </Form>
        </div>
    )
}

