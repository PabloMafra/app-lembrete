import styled from "styled-components";

export const AppConteiner = styled.div`

display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:100%;
`;

export const TituloForm = styled.h3`
padding:15px 0;
font-size:40px;
font-weight:bold;
color: black;
font-family: 'Roboto';
`;

export const FormConteiner =styled.form`

width:80%;
@media screen and (min-width:600px){
    max-width:800px;
}
`

export const FormConteudo = styled.div`
display:flex;
flex-direction:column;
`;

export const Input =styled.input`
padding:10px;
border-radius:8px;
border:2px solid;
margin-top:20px;
`

export const BotaoAdd =styled.button`

display:flex;
margin-top:25px;
padding:9px 9px;
border-style: none;
border: 0.5px solid black;
border-radius: 10px;
background:#3ACB3D;
color:black;
font-weight:bold;
cursor:pointer;
`
export const SubTitulo =styled.div`
margin-top:25px;
padding:15px 0;
font-size:27px;
font-weight:bold;
color:black;
font-family: 'Roboto';
`

export const CardConteiner =styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const CardLembrete =styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
align-items:center;
width:400px;
border:2px solid black;
border-radius: 10px;
background: linear-gradient(207deg, rgba(0,239,255,0.4759725400457666) 0%, rgba(0,78,103,0.6178489702517163) 51%, rgba(0,52,161,0.437070938215103) 100%);
margin-bottom:12px;
padding: 30px 0;
&:hover{
 box-shadow: 1px 1px 30px 1px black;
}
@media screen and (max-width:550px){
    width:360px;
}
@media screen and (max-width:360px){
    width:300px;
}
`

export const TextoLembrete =styled.div`
display:flex;
flex-direction:column;
margin-left:15px;
margin-right:auto;
color:white;
font-size:1.5rem;
font-weight:bold;
@media screen and (max-width:650px){
    font-size:16px;
}
@media screen and (min-width:1100px){
    margin-left:10%;
    
}
font-family: 'Roboto';
`

export const BotaoDeletar =styled.button`
padding:4px 8px;
position:relative;
margin-left:50%;
border-style: none;
border: 0.5px solid black;
border-radius: 25px;
background:red;
color:white;
font-weight:bold;
&:hover{
    cursor:pointer;
}
    margin-right:30px;
    margin-left:30%;
`
export const TitleDataLembrete =styled.span`
font-weight:bold;
font-family: 'Roboto';
`
