import { useState } from 'react';
import { AppConteiner, BotaoAdd, BotaoDeletar, CardConteiner, CardLembrete, FormConteiner, FormConteudo, Input, SubTitulo, TextoLembrete, TituloForm } from './EstiloLembrete';


function Lembrete (){
    
    const [nomeLembrete, setNomeLembrete] = useState("");
    // useState salva o estado de qualquer tipo de dado
    const [dataLembrete, setDataLembrete] = useState("");
    const [listaLembrete, setListaLembrete] = useState([]); //lista de lembrete


    function Add (e){
        e.preventDefault(); // não deixa a tela atualizar

        /*pegar os dados que estão em nomeLembrete e dataLembrete
        criar um objeto com eles {nomeLembrete, dataLembrete} "lembrete"*/
        if(nomeLembrete.length>0 && dataLembrete.length>0){
            const numeroId = Math.random();
            const lembrete = {
                nome: nomeLembrete, data: dataLembrete, id: numeroId
            }
            
            //salvar na lista de lembrete -> setListaLembrete(objeto)
            setListaLembrete([...listaLembrete, lembrete]);
            setNomeLembrete("");
            setDataLembrete("");
        }else{
            alert("Os campos devem estar preenchidos!");
        }        
    }

    function Deletar(id){
        const listaFiltrada = listaLembrete.filter((item)=> item.id !== id);

        //filtra a lista retirando o item pelo index
        setListaLembrete(listaFiltrada);
    }

    function AlterarTexto(e){
        setNomeLembrete(e.target.value); // altera o vlaor do nomeLembrete com o value que está no input
    }

    function AlterarData(e){
        setDataLembrete(e.target.value);
    }

    function SubmeterForm(e){
        e.preventDefault();
    }

    return (
       <AppConteiner>
        <TituloForm>Novo Lembrete</TituloForm>
        <FormConteiner onSubmit={SubmeterForm}>
            <FormConteudo>
                <Input type="text" placeholder="Nome do lembrete" onChange={AlterarTexto} value={nomeLembrete}/>
                <Input type="date" placeholder='Data do lembrete (no formato dd/mm/yyyy)' onChange={AlterarData} value={dataLembrete}/>                
                <div>
                    <BotaoAdd onClick={Add}>Adicionar</BotaoAdd>
                </div>
                <SubTitulo>
                    <h2>Lista de Lembretes &#x1F4CC;</h2>
                </SubTitulo>
                <CardConteiner>
                    {/* map para cada item do array tem uma ação */}
                    {listaLembrete.map((item)=>{
                        var dataPtBr = new Date(item.data).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

                        return(
                            <CardLembrete key={item.id}>
                                <TextoLembrete>
                                <p>{dataPtBr}</p>
                                <p>{item.nome}</p>
                                </TextoLembrete>
                                <BotaoDeletar onClick={()=>Deletar(item.id)}>X</BotaoDeletar>
                            </CardLembrete>)
                    })}
                </CardConteiner>
            </FormConteudo>
        </FormConteiner>
       </AppConteiner>
    )
}

export default Lembrete;