import './Produtos.module.css'
// import { Button, Space } from 'antd'
// import { useState } from 'react'

function Produtos({nome, descricao, preco, id}) {
    // const[interruptor, setInterruptor]=useState("off")
    return (
        <div className="produtos">
            <div className="produtos" id={id}></div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R$ <span className="bold">{preco}</span></p>
            <a href="/links" className="btn">Comprar</a>
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