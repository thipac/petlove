import React from 'react'
import { ThemeProvider } from 'styled-components'
import Contato from './Pages/Contato'
import Home from './Pages/Home'
import Pets from './Pages/Pets'
import QuemSomos from './Pages/QuemSomos'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './Styles/GlobalStyles'
import { light } from './Styles/Themes/light' 
import * as S from './Styles/App.styles'
import Header from './Components/Header'




const App = () => {
    return (
        
        <ThemeProvider theme = {light}>
            <GlobalStyles/>
            <S.Container>
                <BrowserRouter>
                    <Header/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/pets' component={Pets}/>
                            <Route path='/contato' component={Contato}/>
                            <Route path='/quemsomos'component={QuemSomos}/>
                        </Switch>  
                </BrowserRouter>
            </S.Container>     
        </ThemeProvider>
          
    )
}

export default App

