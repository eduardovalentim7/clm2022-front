import React,{createContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import api from '../config/configApi'

const Context  = createContext(); //componente 


//Children sao as rotas que estao no app
function AuthProvider({children}){

const [authenticated, setAuthenticated] = useState(false);
//const [loading, setLoading] = useState(true);


//verificar se o usuario esta logado
useEffect(()=>{

    const getLogin = async ()=>{
      
        const token = localStorage.getItem('token');
        if(token && valUser()){
            api.defaults.headers.Authorization = `Bearer ${(token)}`;
           // console.log('Token>' + token)
            setAuthenticated(true);
        }else{
            console.log('Token nao localizado!!')
        }
       // setLoading(false)
    }


    getLogin();

},[]);

const valUser = async ()=>{
    const valueToken = localStorage.getItem('token');

    const headers = {'headers':{
        'Authorization':'Bearer' + valueToken
    }
}
    //requisicao para api
    await api.get('/val-token', headers)
    .then(()=>{
        return true;
    }).catch((err)=>{
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.Authorization = undefined;
        return false
    })
}



async function signIn(sit){
    setAuthenticated(true)
}

//botao sair
function handleLogout(){   
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.Authorization = undefined;
 
}

// if(setLoading){
//     return <h1>Carregando...</h1>
// }


    return(
        <Context.Provider value={{authenticated, signIn,handleLogout}}>
            {children}
        </Context.Provider>
    )

}
//exporta como objeto
export {Context, AuthProvider};
