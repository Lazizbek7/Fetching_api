import "./about.css"
import img_1 from '../images/img1.png'
import img_2 from '../images/img2.png'
function About() {
    return(
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
                    <img src={img_1} />
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                    <img src={img_2} />
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                    <img  src={img_2} />
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                    <img  src={img_2} />
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                    <img  src={img_2} />
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                </div>
                <div className="card">
                    <img  src={img_2} />
                    <p className="txt1">C  ГОВЯДИНОЙ</p>
                    <span ><p className="txt2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p></span>
                </div>
            </div>
            </div>
        </div>
    )
}
export default About;