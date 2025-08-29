export default function Projects() {
	const projects = [
		{ title: 'E‑Commerce Platform', description: 'Full‑stack shop with payments and admin.', tech: ['Next.js','Node','Stripe'], icon: 'cart', link: '#' },
		{ title: 'Task Manager', description: 'Realtime collaboration for teams.', tech: ['React','Firebase'], icon: 'clipboard', link: '#' },
		{ title: 'Weather Dash', description: 'Maps and forecasts with rich visuals.', tech: ['Vue','Chart.js'], icon: 'weather', link: '#' },
	];
	return (
		<section id="projects" className="section section--projects">
			<div className="container">
				<div className="stack-lg">
					<h2 className="heading-lg">Projects</h2>
					<div className="stack">
						{projects.map((p, i) => (
							<div key={i} className="card hover-scale">
								<div className="row" style={{ justifyContent: 'space-between' }}>
									<div className="row" style={{ gap: '.75rem' }}>
										<div className="icon-pill" aria-hidden>
											{p.icon === 'cart' && (
												<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 4.5h2l2 12h9.5l2-8.5H7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="1.2" strokeWidth="1.6"/><circle cx="17" cy="20" r="1.2" strokeWidth="1.6"/></svg>
											)}
											{p.icon === 'clipboard' && (
												<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4h-6l-.5 2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.5L15 4Z" strokeWidth="1.6"/><path d="M9 11h6M9 15h6" strokeWidth="1.6" strokeLinecap="round"/></svg>
											)}
											{p.icon === 'weather' && (
												<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="8" r="3" strokeWidth="1.6"/><path d="M7 19h8a3 3 0 0 0 0-6 4.5 4.5 0 0 0-8-1.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
											)}
										</div>
										<div className="heading-md">{p.title}</div>
									</div>
									<a className="btn" href={p.link} target="_blank" rel="noopener noreferrer">View</a>
								</div>
								<p className="muted" style={{ marginTop: 8 }}>{p.description}</p>
								<div className="row" style={{ flexWrap: 'wrap', marginTop: 12 }}>
									{p.tech.map((t) => (
										<span key={t} className="pill muted">{t}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
