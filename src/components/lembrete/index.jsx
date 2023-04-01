import { useState } from 'react';
import { AppConteiner, CardLembrete, FormConteiner, Input, TituloForm } from './EstiloLembrete';


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

    function DataLembrete(e){
        setDataLembrete(e.target.value);
    }

    function Submeter(e){
        e.preventDefault();
    }

    return (
       <AppConteiner>
        <TituloForm>Novo Lembrete</TituloForm>
        <form onSubmit={Submeter}>
            <FormConteiner>
                <Input type="text" placeholder="Nome do lembrete" onChange={AlterarTexto} value={nomeLembrete}/>
                
                <Input type="text" placeholder='Data do lembrete (no formato dd/mm/yyyy)' onChange={DataLembrete} value={dataLembrete}/>
                
                <div>
                    <button onClick={Add}>Adicionar</button>
                </div>
                <div>
                    {/* map para cada item do array tem uma ação */}
                    {listaLembrete.map((item)=>{
                        return(
                            <CardLembrete key={item.id}>
                                <div>
                                <p>{item.data}</p>
                                <p>{item.nome}</p>
                                </div>
                                <button onClick={()=>Deletar(item.id)}>X</button>
                            </CardLembrete>
                        )
                    })}
                </div>
            </FormConteiner>
        </form>
       </AppConteiner>
    )
}

export default Lembrete;