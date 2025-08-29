"use client";

import { useEffect, useRef, useState } from 'react';

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState('about');
	const obsRef = useRef(null);
	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'achievements', label: 'Achievements' },
		{ id: 'education', label: 'Education' },
		{ id: 'connect', label: 'Connect' },
	];

	useEffect(() => {
		const targets = sections.map(s => document.getElementById(s.id)).filter(Boolean);
		if (!targets.length) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
		}, { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
		targets.forEach(t => io.observe(t));
		obsRef.current = io;
		return () => io.disconnect();
	}, []);

	const go = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		setOpen(false);
	};

	return (
		<header style={{ position: 'fixed', left: 0, right: 0, top: 0, zIndex: 50, background: 'rgba(11,12,16,0.72)', backdropFilter: 'saturate(135%) blur(8px)', borderBottom: '1px solid var(--border)' }}>
			<nav className="container" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div className="row" style={{ gap: '.5rem' }}>
					<div className="pill" style={{ fontWeight: 800 }}>Portfolio</div>
				</div>
			<div className="row" style={{ gap: '.75rem' }}>
					  <div className="row hide-sm" style={{ gap: '.75rem' }}>
						{sections.map((s) => (
							<button key={s.id} className={`nav-link ${active === s.id ? 'is-active' : ''}`} onClick={() => go(s.id)}>
								{s.label}
							</button>
						))}
					</div>
					<button aria-label="Menu" className="btn show-sm" onClick={() => setOpen((v) => !v)}>
						☰
					</button>
				</div>
			</nav>
			{open && (
				<div className="container show-sm" style={{ paddingBottom: 12 }}>
					<div className="card" style={{ marginTop: 8 }}>
						<div className="stack">
							{sections.map((s) => (
								<button key={s.id} className={`nav-link ${active === s.id ? 'is-active' : ''}`} onClick={() => go(s.id)}>
									{s.label}
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
