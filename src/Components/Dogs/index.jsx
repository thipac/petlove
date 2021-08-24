import React, { useState, useEffect } from 'react' //rfce 
import * as S from "./Dogs.styles"

const Dogs = () => {

    const [dadosApi, setDadosApi] = useState([])
    const [apiChegou, setApiChegou] = useState(false)
    
    useEffect(() => {
        fetch('https://nameless-escarpment-53355.herokuapp.com/pets/dogs')
        .then((resposta) => resposta.json())
        .then((dados)=>{
            setDadosApi(dados.results)
            setApiChegou(true)
            })
        }, [])
    
        return (
            <S.Container>
                {!!dadosApi && apiChegou ? (dadosApi.map((item) => console.log(item.nome))) : (<p>Carregando</p>)}
            </S.Container>
        )
    }
    


export default Dogs 

