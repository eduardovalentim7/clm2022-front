import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import {
    Title,
    Button,    
    Form,    
    CardUser
} from './styles';

import api from "../../config/configApi"

//context
import {Context} from '../../Context/AuthContext';




export const Login4 = () => {

    const navigate  = useNavigate();

    //Uso do Context - pega o parametro la do provider
    const {authenticated, signIn} = useContext(Context)
    
  // console.log("Situacao do usuario na pagina de Login "  + authenticated)

    const [usuario, setUsuario] = useState({
        usuario:"",
        password:""
    });

    //mensagem de Erro
    const [status, setStatus] = useState({
        type :"", 
        message:"",
        loading:false //1 - cria o estado
    })

    //receber os valores
    const valorInput = e => setUsuario({...usuario,[e.target.name]:e.target.value});


    //Visualizar o resultado
    const loginSubmit = async e =>{
        e.preventDefault()
       console.log(usuario)
       //2 - ao clicar no botao o loading fica true
       setStatus({
           loading:true
       })


       const headers = {
           'Content-Type': 'application/json'
       }
   
       await api.post('/login', usuario, {headers})
       .then((response)=>{
         console.log(response.data.name)
          setStatus({
              type:"success",
              message:response.data.message,
              //3 quando a api responde o loading se torna falso
              loading:false
          })
          //salvar o token no LocalStorage
         localStorage.setItem('token', response.data.token);
         signIn(true)

          navigate('/Dashboard')
   
   
       }).catch((err)=>{
           if(err.response){
              console.log(err.response); //api ok mas senha incorreta
               setStatus({
                   type:"erro",
                   message:err.response.data.message,
                   loading:false
               })   
           }else{
               console.log('Tente Mais tarde!!') //sem conexao com API              

           }

       })
    }



    return (
        <div>
             {status.type === 'erro' ? <p style={{color:"red"}}>{status.message}</p> : ""}
            
            {status.type === 'success' ? <p style={{color:"green"}}>{status.message}</p>: ""}


            <Form onSubmit={loginSubmit}> 
                <Title>Acesso ao Sistema </Title>                
                    <CardUser>
                        <label>Usuario</label>
                        <input type="text" name='usuario' placeholder="Digite o Usuario" onChange={valorInput}></input>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Digite a senha" onChange={valorInput}></input>
                    </CardUser>                
                        
                        {status.loading ? <p>Validando Login...</p> : <Button type="submit">Logar</Button>}
            </Form>
        </div>
    )
}