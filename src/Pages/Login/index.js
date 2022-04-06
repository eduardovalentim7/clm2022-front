import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

//uso da API
import api from '../../config/configApi';

//context
import {Context} from '../../Context/AuthContext'



export const Login3 = () =>{

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
       // console.log(usuario)
       //2 - ao clicar no botao o loading fica true
       setStatus({
           loading:true
       })


       const headers = {
           'Content-Type': 'application/json'
       }
   
       await api.post('/login', usuario, {headers})
       .then((response)=>{
         // console.log(response.data.name)
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
              // console.log(err.response); //api ok mas senha incorreta
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

    return(
        <div>
            {status.type === 'erro' ? <p style={{color:"red"}}>{status.message}</p> : ""}
            <h1>Login</h1>
            {status.type === 'success' ? <p style={{color:"green"}}>{status.message}</p>: ""}
           
            <form onSubmit={loginSubmit}>
                <label>Usuario</label> <br />
                <input type="text" name="usuario" onChange={valorInput} placeholder="Digite o nome do usuario"></input><br /><br />
                <label>Password</label><br />
                <input type="password" name="password" onChange={valorInput} placeholder="Digite a Senha"></input><br /><br />

                 {status.loading ? <p>Validando Login...</p> : <button type="submit">Logar</button>}
                 
            </form>
        </div>
    )

}