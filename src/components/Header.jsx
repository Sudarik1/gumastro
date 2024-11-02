
import { useState } from 'react';

import logo from '../assets/images/logo.png'

const Header = () => {

    const [applicantName, setApplicantName] = useState('')
    const [applicantPhone, setApplicantPhone] = useState('')
    const [applicantEmail, setApplicantEmail] = useState('')
    
    const addApplicationHandler = (e) => {

        e.preventDefault();
        const confirm = window.confirm('Уверены, что хотите оставить этот комментарий?')
        if(!confirm){
            return
        }

        const addApplication = async (applicantName, applicantPhone, applicantEmail) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/application/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: applicantName,
                        phone: applicantPhone,
                        email: applicantEmail                    
                    })
                })
            }
            catch (error) {
                console.log('Возникла ошибка во время подачи заявки', error)
            }
        }

        addApplication(applicantName, applicantPhone, applicantEmail)
        setApplicantName('')
        setApplicantPhone('')
        setApplicantEmail('')
    }

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

                <form onSubmit={addApplicationHandler} className="header__hero__form increase-contrast" noValidate> 
                    <div className="header__hero__form__inputs">
                        <div>
                            <label htmlFor="user-name" className="increase-contrast" >Ваше имя</label>
                            <input 
                                className="header__hero__form__inputs--style" 
                                type="text" 
                                name="user-name" 
                                placeholder="Укажите по желанию"
                                onChange={(e) => setApplicantName(e.target.value)}
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
                                onChange={(e) => setApplicantEmail(e.target.value)}
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
                                onChange={(e) => setApplicantPhone(e.target.value)}
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