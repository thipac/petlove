import React from 'react' //rfce 
import * as S from "./Dogs.styles"

const Dogs = () => {

    const [dadosApi, setDadosApi] = useState([])
    
    useEffect(() => {
        fetch('https://nameless-escarpment-53355.herokuapp.com/pets/dogs')
        .then((resposta) => res.json())
        .then((dados) => setDadosApi(dados))
        }, [])
    
    return (
        <S.Container>
             { !! dadosApi ? (
                 dadosApi.map((item)=>{
                     console.log(item.nome);
                 })
             ) : (<p>Carregando</p>)}
        </S.Container>
    )
}

export default Dogs