export default function Education() {
	const education = [
		{ degree: 'B.Sc. (Ongoing)', school: 'Jashore University of Science and Technology', year: '2023 — Present', icon: 'grad', description: 'Studying Computer Science with a focus on modern web development and software engineering.' },
	];
	return (
		<section id="education" className="section section--education">
			<div className="container">
				<div className="stack-lg">
					<h2 className="heading-lg">Education</h2>
					<div className="stack">
						{education.map((edu) => (
							<div key={edu.degree} className="card hover-scale">
								<div className="row" style={{ gap: '.75rem' }}>
									<div className="icon-pill" aria-hidden>
										{edu.icon === 'grad' && (
											<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7.5 12 4l9 3.5-9 3.5-9-3.5Z" strokeWidth="1.6" strokeLinejoin="round"/><path d="M6 10v4.5a6 6 0 0 0 12 0V10" strokeWidth="1.6"/></svg>
										)}
									</div>
									<div className="stack" style={{ gap: 2 }}>
										<div className="heading-md">{edu.degree}</div>
										<div className="muted">{edu.school} • {edu.year}</div>
									</div>
								</div>
								<p className="muted" style={{ marginTop: 8 }}>{edu.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
