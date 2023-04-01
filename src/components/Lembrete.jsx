    import react from 'react';
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
        const lembrete = {
            nome: nomeLembrete, data: dataLembrete
        }
        
        //salvar na lista de lembrete -> setListaLembrete(objeto)
        setListaLembrete([...listaLembrete, lembrete]);
        
    }

    function AlterarTexto(e){
        setNomeLembrete(e.target.value); // altera o vlaor do nomeLembrete com o value que está no input
    }

    function DataLembrete(e){
        setDataLembrete(e.target.value);
    }

    return (
       <div>
        <h3>Novo Lembrete</h3>
        <form>
            <div>
                <input type="text" placeholder="Nome do lembrete" onChange={AlterarTexto} value={nomeLembrete}/>
                
                <input type="text" placeholder='Data do lembrete (no formato dd/mm/yyyy)' onChange={DataLembrete} value={dataLembrete}/>
                
                <div>
                    <button onClick={Add}>Criar Lembrete</button>
                </div>
                <div>
                    {/* map para cada item do array tem uma ação */}
                    {listaLembrete.map((item)=>{
                        
                    })}
                </div>
            </div>
        </form>
       </div>
    )
}

export default Lembrete;