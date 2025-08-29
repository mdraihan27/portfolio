export default function Hero() {
	return (
		<section id="about" className="section section--about">
			<div className="container">
				<div className="stack-lg">
		  <h1 className="heading-xl hero-title"><span className="text-rolling-gradient">Hi, I’m Md. Raihan Hossen</span></h1>
					<p className="heading-md muted">Full Stack Developer · Creative Thinker · Problem Solver</p>
					<p className="muted" style={{ maxWidth: 720 }}>
						I design and build simple, fast, and delightful experiences. Scroll to explore projects, achievements, and education.
					</p>
					<div className="row" style={{ flexWrap: 'wrap' }}>
						<a className="btn" href="#projects">View My Work</a>
						<a className="btn-alt" href="#achievements">Achievements</a>
					</div>
				</div>
			</div>
		</section>
	);
}
