import './Local.css'
import '../../layout/Container.css'

function Local() {
    return (
        <div className='container_pages'>
            <div>
                Local
            </div>
            <iframe className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974904582185!2d-46.65906922386872!3d-23.56134956159329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1692908032081!5m2!1spt-BR!2sbr">
            </iframe>
        </div>
    )
}

export default Local