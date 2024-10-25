
import FooterSocialsInfos from "./FooterSocialsInfos"

const Footer = () => {

    return(
        <div className="footer text--increase-contrast">
            <div className="footer__contacts-without-icon">
                <FooterSocialsInfos>Телефон: +7 960 511 36 98</FooterSocialsInfos>
                <FooterSocialsInfos copyToClipboard={true} text='gumastro@yandex.ru' className="footer--clipboard">Почта: gumastro@yandex.ru</FooterSocialsInfos>
                <FooterSocialsInfos>Вайбер: +7 960 511 36 98</FooterSocialsInfos>
            </div>
            <div className="footer__contacts-with-icon">
                <div className="footer__contacts-with-icon__contacts">
                    <FooterSocialsInfos copyToClipboard={true} text='gumastro' className="footer--clipboard">Skype: gumastro</FooterSocialsInfos>
                    <FooterSocialsInfos>Telegram: +7 960 511 36 98</FooterSocialsInfos>
                    <FooterSocialsInfos>WhatsApp: +7 960 511 36 98</FooterSocialsInfos>
                </div>
                <div className="footer__contacts-with-icon__icons">
                    <a href="https://join.skype.com/invite/Nba8cr0zcjeM" target="_blank" aria-label="icon of the Skype link">
                        <i className="fa-brands fa-skype"></i>
                    </a>
                    <a href="https://t.me/Sergey_Olonichev" target="_blank" aria-label="icon of the Telegram link">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a href="https://wa.me/+79605113698" target="_blank" aria-label="icon of the WhatsApp link">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer