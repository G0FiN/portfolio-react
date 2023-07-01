import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title">
						Як захочеш зв'язатися то от тобі способи це зробити
						</div>
						<div className="subtitle contact-subtitle">
						Дякуємо за ваш інтерес до зв’язку
						мене. Я радий вашим відгукам, запитанням і
						пропозиції. Якщо у вас є конкретне питання або
						коментар, будь ласка, надішліть мені електронний лист безпосередньо на адресу
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Я намагаюся відповідати на всі повідомлення всередині
							24 години, хоча під час зайнятості це може зайняти більше часу
							періоди. Крім того, ви можете скористатися контактною формою
							на моєму веб-сайті, щоб зв’язатися. Просто заповніть
							обов'язкові поля, і я зв'яжуся з вами, як тільки
							можливо. Нарешті, якщо ви віддаєте перевагу підключенню
							у соціальних мережах, ви можете знайти мене{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Я регулярно публікую оновлення та взаємодію зі своїм
							підписників, тож не соромтеся зв’язуватися.
							Ще раз дякую за ваш інтерес, і я з нетерпінням чекаю
							почути від вас!
						</div>
					</div>
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
