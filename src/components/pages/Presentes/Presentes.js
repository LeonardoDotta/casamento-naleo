import Card from './Card'
// import '../../layout/Container.css'
import '../Presentes/Presentes.css'

function Presentes() {
    return (
        <main className='container_pages'>
            <div>
                <div>
                    Presentes
                </div>
                <div className='div_p'>
                    Escolha um item que queira nos presentear. Ficaremos muito felizes com sua escolha!
                </div>
            </div>
            <section className='section'>
                <div className='products-div'>
                    <Card
                        nome='Micro-ondas Philco PMO34ES 34L Espelhado 1400W'
                        descricao=''
                        preco='869,90'
                        parcelas='9x'
                        preço2='96,66' 
                        nome_foto='naleo1.webp'
                        link='https://www.magazineluiza.com.br/micro-ondas-philco-pmo34es-34l-espelhado-1400w/p/ffed9aa61b/ed/mond/?&seller_id=britania'
                    />
                    <Card
                        nome='Echo Dot 5ª Geração com Relógio | Smart Speaker com Alexa'
                        descricao=''
                        preco='502,55'
                        parcelas='12'
                        preço2='44,12'
                        nome_foto='alexa.jpg' 
                        link='https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Azul/dp/B09B8XXWKT/ref=asc_df_B09B8XXWKT/?tag=googleshopp00-20&linkCode=df0&hvadid=659325426172&hvpos=&hvnetw=g&hvrand=3102690630444415254&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100508&hvtargid=pla-2112406910834&psc=1'
                    />
                    <Card
                        nome='Jogo Facas Inox Nygma Preto Tramontina'
                        descricao=''
                        preco='218,49'
                        parcelas='4'
                        preço2='54,63'
                        nome_foto='facas.jpg' 
                        link='https://www.amazon.com.br/Jogo-Facas-Nygma-Preto-Tramontina/dp/B085GJS4NR/ref=asc_df_B085GJS4NR/?tag=googleshopp00-20&linkCode=df0&hvadid=379792705886&hvpos=&hvnetw=g&hvrand=4426460128061047207&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031629&hvtargid=pla-917628088738&psc=1'
                    />
                    <Card
                        nome='Cafeteira Dolce Gusto Genio S Basic Branca 100V'
                        descricao=''
                        preco='419,90'
                        parcelas='0'
                        preço2='0'
                        nome_foto='cafeteira.webp' 
                        link='https://www.nescafe-dolcegusto.com.br/genio-s-basic-branca-110v'
                    />
                     <Card
                        nome='Liquidificador Mondial Turbo 2,7 Litros 5 Velocidades '
                        descricao=''
                        preco='130,00'
                        parcelas='5'
                        preço2='26,00'
                        nome_foto='liquidificador.jpg' 
                        link='https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Azul/dp/B09B8XXWKT/ref=asc_df_B09B8XXWKT/?tag=googleshopp00-20&linkCode=df0&hvadid=659325426172&hvpos=&hvnetw=g&hvrand=3102690630444415254&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100508&hvtargid=pla-2112406910834&psc=1'
                    />
                       <Card
                        nome='Batedeira Cake Inox 4 Velocidades 500W Mondial'
                        descricao=''
                        preco='99,90'
                        parcelas='5'
                        preço2='19,80'
                        nome_foto='batedeira.jpg' 
                        link='https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Azul/dp/B09B8XXWKT/ref=asc_df_B09B8XXWKT/?tag=googleshopp00-20&linkCode=df0&hvadid=659325426172&hvpos=&hvnetw=g&hvrand=3102690630444415254&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100508&hvtargid=pla-2112406910834&psc=1'
                    />
                </div>
            </section>
        </main>
    )
}

export default Presentes