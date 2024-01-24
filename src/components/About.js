import "./about.css"
import img_2 from '../images/ab.png'
function About() {
    return(
        <div className="all_about">
        <div className="main_content" id="About_part">
        <div className="content">
            <nav className="nav_1">
            <ul>
                <li><a className="a_1" href="#">Гамбургеры </a></li>    
                <li><a href="#">Хот доги </a></li>
                <li><a href="#">Пицца </a></li>
                <li><a href="#">Напитки </a></li>
                <li><a href="#">Соки </a></li>
            </ul>
            </nav>
            <div className="content2">
                <div className="card">
                    <button className="btn2">14500</button>
                    <img className="img" src={img_2} />
                    <div className="shadow"><p>
                    Добавить в корзину
                    </p></div> 
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                <button className="btn2">14500</button>
                    <img className="img" src={img_2} />
                    <div className="shadow"><p>
                    Добавить в корзину
                    </p></div> 
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                <button className="btn2">14500</button>
                    <img className="img" src={img_2} />
                    <div className="shadow"><p>
                    Добавить в корзину
                    </p></div> 
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                <button className="btn2">14500</button>
                    <img className="img"  src={img_2} />
                    <div className="shadow"><p>
                    Добавить в корзину
                    </p></div> 
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                <button className="btn2">14500</button>
                    <img className="img"  src={img_2} />
                    <div className="shadow"><p>
                    Добавить в корзину
                    </p></div> 
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                <button className="btn2">14500</button>
                    <img  className="img" src={img_2} />
                    <div className="shadow"><p>
                    Добавить в корзину
                    </p></div> 
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <span ><p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p></span>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default About;