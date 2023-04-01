import { useState } from 'react';

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
       <div>
        <h3>Novo Lembrete</h3>
        <form onSubmit={Submeter}>
            <div>
                <input type="text" placeholder="Nome do lembrete" onChange={AlterarTexto} value={nomeLembrete}/>
                
                <input type="text" placeholder='Data do lembrete (no formato dd/mm/yyyy)' onChange={DataLembrete} value={dataLembrete}/>
                
                <div>
                    <button onClick={Add}>Criar Lembrete</button>
                </div>
                <div>
                    {/* map para cada item do array tem uma ação */}
                    {listaLembrete.map((item)=>{
                        return(
                            <div key={item.id}>
                                <p>{item.nome+"-"+ item.data}</p>
                                <button onClick={()=>Deletar(item.id)}>X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </form>
       </div>
    )
}

export default Lembrete;