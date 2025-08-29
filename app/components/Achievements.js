export default function Achievements() {
	const items = [
		{ label: 'Open Source PRs', value: 42, icon: 'merge' },
		{ label: 'Hackathon Wins', value: 5, icon: 'trophy' },
		{ label: 'Certifications', value: 8, icon: 'certificate' },
		{ label: 'Talks & Workshops', value: 12, icon: 'mic' },
	];
	return (
		<section id="achievements" className="section section--achievements">
			<div className="container">
				<div className="stack-lg">
					<h2 className="heading-lg">Achievements</h2>
					<div className="row" style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
						{items.map((it) => (
							<div key={it.label} className="card hover-scale ach-card" style={{ textAlign: 'center' }}>
								<div className="row" style={{ gap: '.5rem', justifyContent: 'center' }}>
									<span className="icon-pill" aria-hidden>
										{it.icon === 'merge' && (
											<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3v12" strokeWidth="1.6" strokeLinecap="round"/><circle cx="6" cy="17" r="2" strokeWidth="1.6"/><circle cx="6" cy="3" r="2" strokeWidth="1.6"/><circle cx="18" cy="7" r="2" strokeWidth="1.6"/><path d="M8 7h4a4 4 0 0 1 4 4v6" strokeWidth="1.6" strokeLinecap="round"/></svg>
										)}
										{it.icon === 'trophy' && (
											<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4Z" strokeWidth="1.6"/><path d="M6 4H4a2 2 0 0 0 0 4h2M18 4h2a2 2 0 1 1 0 4h-2" strokeWidth="1.6"/><path d="M12 11v4" strokeWidth="1.6" strokeLinecap="round"/><path d="M8 19h8M9 15h6v4H9z" strokeWidth="1.6"/></svg>
										)}
										{it.icon === 'certificate' && (
											<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="4" strokeWidth="1.6"/><path d="m13 13 3 3 3-3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
										)}
										{it.icon === 'mic' && (
											<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="3" width="6" height="10" rx="3"/><path d="M12 17v4" strokeWidth="1.6" strokeLinecap="round"/><path d="M7 11a5 5 0 0 0 10 0" strokeWidth="1.6"/></svg>
										)}
									</span>
									<span className="heading-md">{it.value}</span>
								</div>
								<div className="muted" style={{ marginTop: 6 }}>{it.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
