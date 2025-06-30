import React from 'react'

const listaVocki = () => {
    const voce=["Jabuka","Banana","Kivi"]
  return (
    <div>
        <ul>
       { voce.map((vocka,index) => 
          <li key={index}>{vocka}</li>
        )}
</ul>

    </div>
  )
}

export default listaVocki