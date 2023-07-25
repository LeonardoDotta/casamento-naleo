import './Card.css'

function Card({nome, descricao, preco, parcelas, preço2, id, link}) {
    return (
        <div className='card'>
            <div className="product-image" id={id}></div>
            <h3>{nome}</h3>
            <p className='descricao'>{descricao}</p>
            <p className='preco'>R$ <span className="bold">{preco}</span> ou em até <span className="bold">
                {parcelas}</span> de R$ <span className="bold">{preço2}</span></p>
            <a href={link} className="btn">Comprar</a>
        </div>
    )
}

export default Card