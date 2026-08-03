import profile from '../assets/profile.png'

function Footer() {
    return (
        <footer>
            <div className="contatos">
                <img src={profile} alt="Foto de paulo moreira, homem negro de cabelos negros e olhos castanhos" />
                <h3>Paulo Moreira</h3>
                <p>Estudante de Análise e Desenvolvimento de Sistemas na UNIJORGE</p>
                <address><a href="mailto:thepaulo1313@gmail.com">thepaulo1313@gmail.com</a></address>
            </div>
            <div className="icons">
                <ul>
                    <li><a href="https://github.com/paaulo-13?tab=repositories" target="_blank" aria-label="GitHub de Paulo Moreira"><i className="fa-brands fa-square-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/paulosergio13/" target="_blank" aria-label="Linkedin de Paulo Moreira"><i className="fa-brands fa-square-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer