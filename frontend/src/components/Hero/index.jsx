import compras from '../../assets/compras.svg'
import seta from '../../assets/Seta.svg'

function Hero() {
    return (
        <div>
            <p>Explore nossa nova coleção</p>
            <p>Aproveite as ofertas e encontre o look ideal para aproveitar o seu São João na Lojinha.</p>
            <p>Ver descontos</p>
            <button><img src={seta} alt="seta pra baixo para redirecionamento"/></button>
            <img src={compras} alt="sacola de compras, presente, caixa para sapato com sapato em cima, etiqueta de preços e algumas folhas para decoração"/>
        </div>
    )
}

export default Hero