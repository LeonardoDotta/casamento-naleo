import './Home.css'
import logonaleo from '../../imgs/logonaleo.jpg'
import { Image } from 'antd'

function Home() {
    return (
        <div className='home_container'>
            <div>
                <h1 className='div_h1'>Olá, querido(a) convidado(a)! Seja bem vindo(a) ao nosso site de casamento!</h1>
            </div>
            <Image
                width={300}
                src={logonaleo}
            />
            <div className='div_p'>
                <p>Conheça um pouco da nossa história! Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento.
                    ♥
                    Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc. Ah, é importante também confirmar sua presença. Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários.
                    ♥
                    Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas, ou então vocês podem utilizar a opção de cotas. Fiquem à vontade!

                    Aguardamos vocês no nosso grande dia!
                </p>
            </div>
        </div>
    )
}

export default Home