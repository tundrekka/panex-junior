import React from 'react'
import Piece from './Piece'


// main component
const Pieces = () => {

   const printColor = ( color ) => {

      console.log(color)

   }

   return (
      <div>
         <h2>pieces</h2>
         <Piece />
      </div>
   )
}

export default Pieces