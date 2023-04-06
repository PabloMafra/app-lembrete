import { useState } from 'react';
import { AppConteiner, BotaoAdd, BotaoDeletar, CardConteiner, CardLembrete, FormConteiner, FormConteudo, Input, SubTitulo, TextoLembrete, TituloForm, TitleDataLembrete } from './EstiloLembrete';


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
                nome: nomeLembrete,
                data: new Date(dataLembrete), // converte para objeto Date
                id: numeroId
              }              
            
            //salvar na lista de lembrete -> setListaLembrete(objeto)
            setListaLembrete([...listaLembrete, lembrete]);
            setNomeLembrete(""); 
            setDataLembrete(""); //após a adição dos inputs, o valor (texto input) retorna para vazio
        }else{
            alert("Os campos devem estar preenchidos!");
        }        
    }

    function Deletar(id){
        const listaFiltrada = listaLembrete.filter((item)=> item.id !== id);

        //filtra a lista retirando o item pelo index
        setListaLembrete(listaFiltrada);
    }

    function AlterarTexto(e){ //essa função faz com que quando eu altero o texto no input estabelecido, ele pega a string (pois o value é o que está escrito no input)
                             //e vai alterar o estado de nomeLembrete
        setNomeLembrete(e.target.value); // altera o vlaor do nomeLembrete com o value que está no input
    }

    function AlterarData(e){
        setDataLembrete(e.target.value);
    }

    function SubmeterForm(e){ //quando tiver um Evento de submeter (linha 55), o evento (submit) não recarregará a página
        e.preventDefault();
    }

        function AgruparLembretesPorData(lista) {
        const grupos = {};
    
        lista.forEach((lembrete) => {
            const data = new Date(lembrete.data);
            data.setDate(data.getDate() + 1); // Adiciona 1 dia à data
            const dia = data.getDate().toString().padStart(2, '0');
            const mes = (data.getMonth() + 1).toString().padStart(2, '0');
            const ano = data.getFullYear().toString();
    
            const dataFormatada = `${dia}/${mes}/${ano}`;
    
            if (!grupos[dataFormatada]) {
                grupos[dataFormatada] = [];
            }
    
            grupos[dataFormatada].push(lembrete);
        });
    
        return grupos;
    }

    const LembretesPorData = AgruparLembretesPorData(listaLembrete);

    return (
        <AppConteiner>
            <TituloForm>Novo Lembrete</TituloForm>
            <FormConteiner onSubmit={SubmeterForm}>
                <FormConteudo>
                    <Input type="text" placeholder="Nome do lembrete" onChange={AlterarTexto} value={nomeLembrete} />
                    <Input
                        type="date"
                        placeholder="Data do lembrete (no formato dd/mm/yyyy)"
                        onChange={AlterarData}
                        value={dataLembrete}
                    />
                    <div>
                        <BotaoAdd onClick={Add}>Adicionar</BotaoAdd>
                    </div>
                </FormConteudo>
            </FormConteiner>

            <SubTitulo>
  <h2>Lista de Lembretes &#x1F4CC;</h2>
</SubTitulo>

{Object.keys(LembretesPorData).map((data) => (

  <div key={data}>
    <TitleDataLembrete>{data}</TitleDataLembrete>
    <CardConteiner>
      {LembretesPorData[data].map((lembrete) => (
        <CardLembrete key={lembrete.id}>
          <TextoLembrete>
            <p>{lembrete.hora}</p>
            <p>{lembrete.nome}</p>
          </TextoLembrete>
          <BotaoDeletar onClick={() => Deletar(lembrete.id)}>X</BotaoDeletar>
        </CardLembrete>
      ))}
    </CardConteiner>
  </div>
))}
</AppConteiner>
);
}

export default Lembrete;