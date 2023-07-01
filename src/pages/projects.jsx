import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
						Речі, які я робив, та те в чому я досяг успіху.
						</div>

						<div className="subtitle projects-subtitle">
						Протягом багатьох років я працював над різними проектами
						і я пишаюся прогресом, якого я досяг. Багато з
						ці проекти є відкритими та доступними для
						інші досліджувати та робити свій внесок. Якщо ви
						зацікавлений у будь-якому з проектів, над якими я працював,
						будь ласка, не соромтеся перевірити код і запропонувати
						будь-які покращення чи вдосконалення, які ви можете мати
						розум. Співпраця з іншими – чудовий спосіб
						навчатися та розвиватися, і я завжди відкритий до нових ідей та
						зворотній зв'язок.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
