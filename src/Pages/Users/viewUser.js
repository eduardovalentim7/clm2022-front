import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import api from '../../config/configApi';

export const ViewUser = () => {
    const Navigate = useNavigate() 

    const [data, setData] = useState('');

    const [status, setStatus] = useState({
        type:'',
        message: ''
    })

    const { id } = useParams();

    console.log("O id selecionado foi: " + id);

    //sempre que o id for atualizado executa o useEffect
    useEffect(() => {

        const getUser = async () => {

            const headers = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Authotization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            await api.get('/userView/' + id, headers)
            .then((response)=>{            

            if(response.data.usuario){
                setData(response.data.usuario)
            }else{
                setStatus({
                    type:'error',
                    message:'Usuario nao Encontrado'
                })
            }
                
            }).catch((err)=>{
                if(err.response){
                    setStatus({
                        type:'error',
                        message:err.response.data.message
                    })
                   // console.log(err.res.data.message)

                }else{
                    setStatus({
                        type:'error',
                        message:'Erro! Tente mais tarde'
                    })
                    
                }

            }) 
        }
        getUser();


    }, [id])


    return (
        <>
            <p>Detalhes do Usuario </p><br /><hr />            
            {status.type === 'error' ? <Navigate to="/list-user"/>:""}
            {status.type === 'success'? <p>{status.message}</p>:""}
        
            <span>{data.id} </span>
            <span>{data.nome} </span>
            <span>{data.usuario} </span>
        </>
    )
}