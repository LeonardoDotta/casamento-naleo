import Produtos from "./Produtos"

function Presentes() {
    return (
            <main className="container">
                <section className="produtos-container">
                  <h1>Presentes</h1>
                    <Produtos nome='Produto 1' descricao='1' preco='100' id='img-1'/>
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