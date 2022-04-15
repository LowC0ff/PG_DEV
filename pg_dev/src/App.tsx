import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
       <Switch>

         <Route path='/profile'>
           <ProtectedLayout>
             <h2>Seja bem vindo!</h2>
           </ProtectedLayout>

         </Route>

         <Route path='/login'>

         </Route>

       </Switch>
      </BrowserRouter>

    </AuthProvider>
  )
}

export default App