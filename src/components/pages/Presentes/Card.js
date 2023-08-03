import './Card.css'

function Card({nome, descricao, preco, parcelas, preço2, id, link}) {
    return (
        <div className='card'>
            <div className="product-image" id={id}></div>
            <div className='div_h3'>{nome}</div>
            <div className='descricao'>{descricao}</div>
            <div className='preco'>R$ <span className="bold">{preco}</span> ou em até <span className="bold">
                {parcelas}</span> de R$ <span className="bold">{preço2}</span></div>
            <a href={link} className="botao">Presentear</a>
        </div>
    )
}

export default Card