import './styles.css'
import coffee from '../../assets/coffee.svg'

export function Footer() {
    return (
        <footer>
            <p>Desenvolvido com muito</p>
            <img src={coffee} className="icon" alt="Icon coffee" />
            por
            <a className='author' href="https://gustavofbc.github.io/" target="_blank"> Gustavo Felipe</a>
        </footer>
    )
}