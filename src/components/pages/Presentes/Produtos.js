import './Produtos.css'
// import { Button, Space } from 'antd'
import { useState } from 'react'

function Produtos({nome, descricao, preco, parcelas, preço2, id, link}) {
    //  const[interruptor, setInterruptor]=useState("off")
    return (
        <div className="produtos">
            <div className="produtos-image" id={id}></div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R$ <span className="bold">{preco}</span> ou em até <span className="bold">{parcelas}</span> de R$ <span className="bold">{preço2}</span></p>
            <a href={link} className="btn">Comprar</a>
            {/* {interruptor=="on"?"pai ta on":""}
            <Button 
                onClick={()=>{
                    if (interruptor=="off"){
                        setInterruptor("on")
                    }
                    else {
                        setInterruptor("off")
                    }
                }}>
                    Default Button
            </Button> */}
        </div>
    )
}

export default Produtos