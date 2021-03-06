import './Components/topbar/Topbar';
import Topbar from './Components/topbar/Topbar';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Works from './Components/works/Works';
import Testimonials from './Components/testimonials/Testimonial';
import Contact from './Components/contact/Contact';
import './app.scss';

function App() {
	return (
		<div className='app'>
			<Topbar />
			<div className='sections'></div>
			<Intro />
			<Portfolio />
			<Works />
			<Testimonials />
			<Contact />
		</div>
	);
}

export default App;
