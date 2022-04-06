import styled from "styled-components";

//Cadastro de Usuarios

export const Table = styled.table`
width:80%;
margin-left:60px;

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
`;


export const ButtonViewer = styled.button`
background-color:#4CAF50;
color: white;
border:none;
padding:5px 11px;
text-align:center;
text-decoration:none;
display:inline-block;
font-size:13px;
margin-right:12px;
border-radius: 5px;
&:hover,
&:focus{
  background-color:#98FB98;
}

`;



export const ButtonEdit = styled.button`
background-color:#008CBA;
color: white;
border:none;
padding:5px 11px;
text-align:center;
text-decoration:none;
display:inline-block;
font-size:13px;
margin-right:12px;
border-radius: 5px;
&:hover,
&:focus{
  background-color:#87CEFA;
}


`;
export const ButtonDelete = styled.button`
background-color:#FF0000;
color: white;
border:none;
padding:5px 11px;
text-align:center;
text-decoration:none;
display:inline-block;
font-size:13px;
border-radius: 5px;
&:hover,
&:focus{
  background-color:#FF6347;
}

`;


//Cadastro de Usuarios

export const Form = styled.form`
margin:20px;

input{
  width:30% ;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
   
}

`;

