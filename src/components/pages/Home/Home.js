import styles from './Home.module.css'
//import LinkButton from '../layout/LinkButton'
import logonaleo from '../../../imgs/logonaleo.jpg'

function Home() {
    return (
        <section className={styles.home_container}>
            {/* <h1>Bem-vindo ao <span>NALEO</span></h1> */}
            <img className={styles.imagem} src={logonaleo} alt='NALEO'/>
            <p>Conheça um pouco da nossa história! Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento.
♥
Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc. Ah, é importante também confirmar sua presença. Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários.
♥
Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas, ou então vocês podem utilizar a opção de cotas. Fiquem à vontade!
 
Aguardamos vocês no nosso grande dia! FOTO NOSSA AQUI NA HOME</p>
            {/* <LinkButton to="/newproject" text="Criar Projeto" /> */}
        </section>
    )
}

export default Home