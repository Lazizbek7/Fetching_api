import "./footer.css"
function Footer() {
    return(
        <div className="all_footer1">
        <div className="all_footer" id="Контакты_part">
        <div className="footer">
            <h1 className="footer_h1">Наши филиалы</h1>
            <div><iframe  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%A2%D0%BEshkent,%20Toshkent+(Street88)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
        </div>
        <div className="bootom_footer">
            <div className="logo_footer">
                <a href="#logo" className="logo_footer_1">STREET88</a>
                <p className="footer_number">+998 90 980 77 23</p>
            </div>
            <div className="footer_contacts">
                <ul>
                    <li><a href="#">Меню</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a  href="https://www.instagram.com/street.88/" target="_blank" >Instagram</a></li>
                    <li><a href="https://www.facebook.com/street88ph/" target="_blank">Facebook</a></li>
                    <li><a href="#" target="_blank">Telegram Bot</a></li>
                    
                </ul>
                <p className="Proweb">Сайт разработан в целях обучения © PROWEB 2019</p>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Footer;