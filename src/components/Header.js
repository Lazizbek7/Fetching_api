import "./header.css"
function Header() {
  return (
    <div className="all_header">
    <div>
      <header>
        <nav>
          <div className="logo">
            <a href="#logo" className="logo">STREET88</a>
          </div>
          <ul>
            <li>
              <a  className="korzina" href="#Корзина">Корзина</a>
            </li>
            <li>
              <a href="#About_part">Меню</a>
            </li>
            <li>
              <a href="#Main_part">О нас</a>
            </li>
            <li>
              <a href="#Контакты_part">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header_main">
          <h1>Большой гамбургер</h1>
          <p className="text_0">говядина</p>
          <p className="text_1">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев</p>
          <button className="btn1">14 500</button>
        </div>
      </header>
    </div></div>
  );
}
export default Header;

