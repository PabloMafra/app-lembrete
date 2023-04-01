import styled from "styled-components";

export const TituloForm = styled.h3`
padding:15px 0;
font-size:40px;
font-weight:bold;
color: white;


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
export const AppConteiner = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;

`;

export const Input =styled.input`
padding:10px;
border-radius:5px;
border:0.1px solid;
margin-top:20px;

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
width:80%;
border:2px solid black;
border-radius: 10px;
background: linear-gradient(207deg, rgba(0,239,255,0.4759725400457666) 0%, rgba(0,78,103,0.6178489702517163) 51%, rgba(0,52,161,0.437070938215103) 100%);
margin-bottom:12px;
padding: 30px 0;
`
export const BotaoAdd =styled.button`

display:flex;
margin-top:25px;
padding:9px 9px;
border-style: none;
border: 0.5px solid black;
border-radius: 10px;
background:#3ACB3D;
color:white;
font-weight:bold;
`

export const BotaoDeletar =styled.button`
padding:4px 8px;
margin-left:50%;
border-style: none;
border: 0.5px solid black;
border-radius: 25px;
background:red;
color:black;
font-weight:bold;
`


