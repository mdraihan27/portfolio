export default function Footer() {
	const icons = [
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/mdraihanhossen', svg: (
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 9.75V21H3.5V9.75h3.44ZM5.22 8.29a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96ZM20.5 21h-3.42v-5.78c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05V21h-3.42V9.75h3.29v1.54h.05c.46-.87 1.6-1.8 3.3-1.8 3.53 0 4.18 2.33 4.18 5.35V21Z" strokeWidth="1.6"/></svg>
		) },
		{ label: 'GitHub', href: 'https://github.com/mdraihan27', svg: (
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.64-.2.64-.45 0-.22-.01-.8-.01-1.57-2.62.57-3.17-1.12-3.17-1.12-.43-1.08-1.06-1.37-1.06-1.37-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.26 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.09-.24-4.29-1.05-4.29-4.66 0-1.03.37-1.87.98-2.53-.1-.24-.43-1.21.09-2.53 0 0 .81-.26 2.65.97a9.2 9.2 0 0 1 4.82 0c1.84-1.23 2.65-.97 2.65-.97.52 1.32.19 2.29.1 2.53.61.66.98 1.5.98 2.53 0 3.62-2.2 4.41-4.3 4.65.35.3.65.88.65 1.78 0 1.29-.01 2.33-.01 2.65 0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
		) },
		{ label: 'Email', href: 'mailto:mdraihanhossen.cse@gmail.com', svg: (
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 7.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9Z" strokeWidth="1.6"/><path d="m4.5 8 7.02 5.01c.3.22.66.22.96 0L19.5 8" strokeWidth="1.6"/></svg>
		) },
	];
			return (
				<footer id="connect" className="section section--footer" style={{ borderTop: '1px solid var(--border)' }}>
			<div className="container">
					<div className="stack-lg" style={{ alignItems: 'center', textAlign: 'center', justifyItems: 'center' }}>
					<div className="heading-lg">Let&apos;s Connect</div>
					<p className="muted" style={{ maxWidth: 640 }}>
						I&apos;m open to new opportunities and collaborations. Let&apos;s build something great.
					</p>
								<div className="footer-icons">
									{icons.map((s) => (
										<a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">{s.svg}</a>
									))}
								</div>
					<div className="muted" style={{ marginTop: 16 }}>
						© {new Date().getFullYear()} Md. Raihan Hossen • Built with Next.js
					</div>
				</div>
			</div>
		</footer>
	);
}
