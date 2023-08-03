import '../../layout/Container.css'
import './RecadosRequests'
import { useEffect } from 'react'
import { loadRecados } from './RecadosRequests'

function Recados() {

    useEffect(() => {
        loadRecados()
    }, [])

    return (
        <div>
            <div className='container_pages'>
                <div>
                    Recados
                </div>
                <div className='div_p'>
                    Deixe aqui seu recado para nós, vamos ler todos com muito carinho!
                </div>
                <form class="row g-3 needs-validation" className='div_form' novalidate action='http://localhost:8000/api/recados/send' method='post'>
                    <div className='div_nome_email'>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="validationCustom01" required name='nome'>
                            </input>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="col-md-4">
                            <label for="validationCustomUsername" class="form-label">Email</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required name='email'>
                                </input>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Mensagem</label>
                        <div class="input-group has-validation">
                            <input type="text" class="form-control" className='div_mensagem' id="validationCustomUsername" aria-describedby="inputGroupPrepend" required name='mensagem'>
                            </input>
                            <div class="invalid-feedback">
                                Please digit a message.
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Recados
