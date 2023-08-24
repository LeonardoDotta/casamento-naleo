import './Local.css'
import '../../layout/Container.css'

function Local() {
    return (
        <div className='container_pages'>
            <div>
                Local
            </div>
            <iframe className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.10533462283!2d-47.90023608504131!3d-21.968920010599895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8705c432de473%3A0x98770a3c9bd378c3!2sAv.%20Miguel%20Damha%2C%201400%20-%20Res.%20Damha%20II%2C%20S%C3%A3o%20Carlos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1679681179099!5m2!1spt-BR!2sbr">
            </iframe>
        </div>
    )
}

export default Local