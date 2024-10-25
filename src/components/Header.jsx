
import logo from '../assets/images/logo.png'

const Header = () => {
    return(
        <div className="header">

            <div>
                <p className="header__motto text--increase-contrast">
                        Сбудется, конечно сбудется 
                        <br></br>
                        Все загаданное сбывается 
                        <br></br>
                        Подойдет, но сперва заблудится 
                        <br></br>
                        Так Чеширский кот улыбается.
                </p>
            </div>

            <div className="header__hero">
                <div className="header__hero__logo">
                    <img className="header__hero__logo__img" src={logo}/>
                    <h1 className="increase-contrast">
                        Гуманистическая 
                        <br></br> 
                        астрология
                    </h1>
                </div>

                <form className="header__hero__form increase-contrast" noValidate> 
                    <div className="header__hero__form__inputs">
                        <div>
                            <label htmlFor="user-name" className="increase-contrast" >Ваше имя</label>
                            <input 
                                className="header__hero__form__inputs--style" 
                                type="text" 
                                name="user-name" 
                                placeholder="Укажите по желанию"
                                pattern="^[a-zA-Zа-яА-ЯёЁ]+(([',. -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$"
                            >
                            </input>
                        </div>
                        
                        <div>
                            <label htmlFor="user-email" className="increase-contrast" >Ваша почта</label>
                            <input 
                                className="header__hero__form__inputs--style"
                                type="email" 
                                name="user-email" 
                                placeholder="Ваша почта"
                            >
                            </input>
                        </div>
                        
                        <div>
                            <label htmlFor="user-phone" className="increase-contrast" >Телефон</label>
                            <input 
                                className="header__hero__form__inputs--style" 
                                type="phone" 
                                name="user-phone" 
                                placeholder="Укажите по желанию"
                            >
                            </input>
                        </div>
                    </div>
                    
                    <div>
                        <button className="header__hero__form__btn">Подать заявку</button>
                    </div>  
                </form>

            </div>

        </div>
    )
}

export default Header