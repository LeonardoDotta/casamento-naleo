import Produtos from './Produtos'

function Presentes() {
    return (
            <main className="container">
                <section className="produtos-container">
                  <h2>Presentes</h2>
                  <h4>Escolha um item que queira nos presentear. Ficaremos muito felizes com sua escolha!</h4>
                    <Produtos nome='Micro-ondas Philco PMO34ES 34L Espelhado 1400W' preco='869,90' parcelas='9x' preço2='96,66' id='img-1' link='https://www.magazineluiza.com.br/micro-ondas-philco-pmo34es-34l-espelhado-1400w/p/ffed9aa61b/ed/mond/?&seller_id=britania'/>
                    <Produtos nome='Produto 2' descricao='2' preco='100' id='img-2'/>
                    <Produtos nome='Produto 3' descricao='3' preco='100' id='img-3'/>
                    <Produtos nome='Produto 4' descricao='4' preco='100' id='img-4'/>
                    <Produtos nome='Produto 5' descricao='5' preco='100' id='img-5'/>
                    <Produtos nome='Produto 6' descricao='6' preco='100' id='img-6'/>
                </section>
            </main>
       )
    }

export default Presentes