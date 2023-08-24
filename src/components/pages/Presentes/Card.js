import './Card.css'

function Card({nome, descricao, preco, parcelas, preço2, nome_foto, link}) {
    return (
        <div className='card'>
            <img src={'/imgs/' + nome_foto} className='product-image'/>
            <div className='div_h3'>{nome}</div>
            <div className='preco'>R$ <span className="bold">{preco}</span> ou em até <span className="bold">
                {parcelas}</span> de R$ <span className="bold">{preço2}</span></div>
            <a href={link} className="botao">Presentear</a>
        </div>
    )
}

export default Card