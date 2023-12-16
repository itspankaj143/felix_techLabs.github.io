/** @format */

import './App.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Bussiness from './components/Bussiness/Bussiness'
import DigitalSucess from './components/DigitalSucess/DigitalSucess'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProjectinMind from './components/ProjectinMind/ProjectinMind'
import ServicesCard from './components/ServicesCard/ServicesCard'
import Webappdevelopment from './components/Webappdevelopment/Webappdevelopment'
import WorkSection from './components/WorkSection/WorkSection'
import StepProcess from './components/StepProcess/StepProcess'
import ConnectingPeople from './components/ConnectingPeople/ConnectingPeople'
import OurWork from './components/OurWork/OurWork'
import FrontendDev from './components/FrontendDev/FrontendDev'
import ProjectGoal from './components/ProjectGoal/ProjectGoal'
import Navbar from './components/Navbar/Navbar'
import Calendly from './components/Calendly/Calendly'
import TeamsJoin from './components/TeamsJoin/TeamsJoin'
import Navbar1 from './components/Carsousel/Carousal'
// import DisplayWhoarewe from './components/WhoWeAre/DisplayWhoarewe';

function App() {
	return (
		<div className='relative h-[100%]'>

			<Navbar />
			<Navbar1 />

			<Header />
			<About />
			<ServicesCard />
			<WorkSection />
			<DigitalSucess />
			<Webappdevelopment />
			<Bussiness />
			<Blogs />
			<OurWork /> 
			<StepProcess />
			
			<ConnectingPeople />
			{/* <DisplayWhoarewe /> */}
			<ProjectinMind />
			<FrontendDev />
			<ProjectGoal />
			<TeamsJoin />

			<Footer />

			{/* <Calendly /> */}
		</div>
	)
}

export default App
