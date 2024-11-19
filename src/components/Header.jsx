import { useState } from 'react';

import logo from '../assets/images/logo.png';

const Header = () => {
    const [applicantName, setApplicantName] = useState('');
    const [applicantPhone, setApplicantPhone] = useState('');
    const [applicantEmail, setApplicantEmail] = useState('');
    const [errors, setErrors] = useState({});

    const sanitizeInput = (input) => {
        return input.replace(/<[^>]*>?/g, '');
    };

    const validateInputs = () => {
        const newErrors = {};

        if (applicantName.trim()) {
            const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+(([',.\- ][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/;
            if (!nameRegex.test(applicantName.trim())) {
                newErrors.name = 'Имя содержит недопустимые символы.';
            }
        }

        if (applicantPhone.trim()) {
            const phoneRegex = /^[+]?[\d\s-]{7,15}$/;
            if (!phoneRegex.test(applicantPhone.trim())) {
                newErrors.phone = 'Телефон должен быть в формате +123456789 или 123-456-7890.';
            }
        }

        if (!applicantEmail.trim()) {
            newErrors.email = 'Электронная почта обязательна для заполнения.';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(applicantEmail.trim())) {
                newErrors.email = 'Введите действительный адрес электронной почты.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const addApplicationHandler = (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const sanitizedData = {
            name: sanitizeInput(applicantName.trim()),
            phone: sanitizeInput(applicantPhone.trim()),
            email: sanitizeInput(applicantEmail.trim()),
        };

        const confirm = window.confirm('Уверены, что хотите оставить заявку?');
        if (!confirm) {
            return;
        }

        const addApplication = async ({ name, phone, email }) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/application/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, phone, email }),
                });

                if (!res.ok) {
                    throw new Error('Ошибка при отправке заявки.');
                }

                console.log('Заявка успешно подана.');
            } catch (error) {
                console.error('Возникла ошибка во время подачи заявки', error);
            }
        };

        addApplication(sanitizedData);
        setApplicantName('');
        setApplicantPhone('');
        setApplicantEmail('');
        setErrors({});
    };

    return (
        <div className="header">
            <div>
                <p className="header__motto text--increase-contrast">
                    Сбудется, конечно сбудется
                    <br />
                    Все загаданное сбывается
                    <br />
                    Подойдет, но сперва заблудится
                    <br />
                    Так Чеширский кот улыбается.
                </p>
            </div>

            <div className="header__hero">
                <div className="header__hero__logo">
                    <img className="header__hero__logo__img" src={logo} alt="Logo" />
                    <h1 className="increase-contrast">
                        Гуманистическая
                        <br />
                        астрология
                    </h1>
                </div>

                <form
                    onSubmit={addApplicationHandler}
                    className="header__hero__form increase-contrast"
                    noValidate
                >
                    <div className="header__hero__form__inputs">
                        <div>
                            <label htmlFor="user-name" className="increase-contrast">
                                Ваше имя
                            </label>
                            <input
                                className="header__hero__form__inputs--style"
                                type="text"
                                name="user-name"
                                placeholder="Укажите по желанию"
                                onChange={(e) => setApplicantName(e.target.value)}
                                value={applicantName}
                            />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="user-email" className="increase-contrast">
                                Ваша почта
                            </label>
                            <input
                                className="header__hero__form__inputs--style"
                                type="email"
                                name="user-email"
                                placeholder="Ваша почта"
                                onChange={(e) => setApplicantEmail(e.target.value)}
                                value={applicantEmail}
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="user-phone" className="increase-contrast">
                                Телефон
                            </label>
                            <input
                                className="header__hero__form__inputs--style"
                                type="text"
                                name="user-phone"
                                placeholder="Укажите по желанию"
                                onChange={(e) => setApplicantPhone(e.target.value)}
                                value={applicantPhone}
                            />
                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                        </div>
                    </div>

                    <div>
                        <button className="header__hero__form__btn">Подать заявку</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;
