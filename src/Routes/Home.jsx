import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  //const {odontologos} = useContextGlobal()
  //1.hacer llamado API utilizando useefect axios 
  //2.guardar en context (tiene que tener una funciona que me ayude a guardar datos en el context se )
  //3. Dentro de home usamos el context y recuperamos el listado de odontologos array
  //4. en adontologos.map recorro el array y muestro las tarjetas

  return (
    <main className="" >
      <h1>Home</h1>

    </main>
  )
}

export default Home