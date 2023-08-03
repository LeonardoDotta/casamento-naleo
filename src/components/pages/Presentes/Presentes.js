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
                            preço2='96,66' id='img-1'
                            link='https://www.magazineluiza.com.br/micro-ondas-philco-pmo34es-34l-espelhado-1400w/p/ffed9aa61b/ed/mond/?&seller_id=britania'
                        />
                        <Card nome='Produto 2' descricao='' preco='100' id='img-2' />
                        <Card nome='Produto 3' descricao='' preco='100' id='img-3' />
                        <Card nome='Produto 4' descricao='' preco='100' id='img-4' />
                        <Card nome='Produto 5' descricao='' preco='100' id='img-5' />
                        <Card nome='Produto 6' descricao='' preco='100' id='img-6' />
                    </div>
            </section>
        </main>
    )
}

export default Presentes