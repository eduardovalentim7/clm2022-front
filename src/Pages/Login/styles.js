import styled from 'styled-components';

export const Title = styled.h1 `
color: #363636;
padding:20px;
text-align:center;
font-size:35px;
`;


export const Form = styled.form`
background: white ;
border-radius:20px;
width:400px;
margin-top:150px;
margin-left:450px;
padding:20px;

`;



export const CardUser = styled.section`
label,input{
  display:block;
  width: 100% ;
  text-align:left;
  font-weight: bold;
  padding:10px;
  border-radius: 10px;
  
}

label{
  margin-top: 5px;
}

input{
    font-size:1rem ;
   border:none;
   border-bottom:2px solid #4169E1;
   outline:none;   
  } 
  
}
`;

export const Button  = styled.button`
  //background-image: linear-gradient( to right #4169E1, #00008B); 
   margin-top: 20px;
   color: white;   
   width:100% ;
   border-radius: 8px;
   padding: 12px;
   outline:0;
   border:0; 
   background:#00008B ;
   font-size:16px;

   &:hover,
   &:focus {
  background: #4169E1;
  }
  

   
`;

