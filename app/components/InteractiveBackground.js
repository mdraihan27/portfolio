"use client";

import { useEffect, useRef } from 'react';

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

export default function InteractiveBackground() {
	const canvasRef = useRef(null);
	const ringRef = useRef(null);
	const rafRef = useRef(0);
	const wavesRef = useRef([]);

	useEffect(() => {
		const wrap = document.createElement('div');
		wrap.className = 'bg-canvas';
		const canvas = document.createElement('canvas');
		const ring = document.createElement('div');
		ring.className = 'cursor-ring';
		wrap.appendChild(canvas);
		document.body.appendChild(wrap);
		document.body.appendChild(ring);
		canvasRef.current = canvas;
		ringRef.current = ring;

		const ctx = canvas.getContext('2d');
		let width = 0, height = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
		const pointer = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0 };
		const stars = [];
		const BASE = { x: 0.8, y: 0 }; // base drift left→right
		const MARGIN = 40; // offscreen buffer for respawn

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			// adjust star count by screen area
			const desired = Math.floor(clamp((width * height) / 2500, 250, 900));
			while (stars.length < desired) stars.push(seedStar(true));
			while (stars.length > desired) stars.pop();
		};

		const seedStar = (anywhere = false) => {
			const z = Math.random(); // depth 0..1
			const speed = 0.6 + z * 1.4; // 0.6..2.0
			const size = 0.6 + z * 1.2; // 0.6..1.8
			const x = anywhere ? Math.random() * width : -MARGIN;
			const y = Math.random() * height;
			return { x, y, px: x, py: y, z, speed, size, ax: 0, ay: 0 };
		};

				const onMove = (e) => {
					pointer.tx = e.clientX;
					pointer.ty = e.clientY;
				};
		const onClick = (e) => {
			wavesRef.current.push({ x: e.clientX, y: e.clientY, r: 0, a: 0.5 });
			ring.classList.add('cursor-ring--active');
			setTimeout(() => ring.classList.remove('cursor-ring--active'), 120);
		};

		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', onMove);
		window.addEventListener('click', onClick);
		resize();

		const loop = () => {
			rafRef.current = requestAnimationFrame(loop);
			// ease pointer
			pointer.vx += (pointer.tx - pointer.x) * 0.18;
			pointer.vy += (pointer.ty - pointer.y) * 0.18;
			pointer.vx *= 0.86; pointer.vy *= 0.86;
			pointer.x += pointer.vx; pointer.y += pointer.vy;
			ring.style.transform = `translate(${pointer.x}px, ${pointer.y}px)`;

			// Clear frame for crisp, non-blurry rendering
			ctx.clearRect(0, 0, width, height);
			ctx.globalCompositeOperation = 'source-over';
			ctx.lineCap = 'round';

			// no global wind; only local interaction should affect stars

			// draw stars as streaks
					for (let i = 0; i < stars.length; i++) {
				const s = stars[i];
				s.px = s.x; s.py = s.y;

				// pointer repulsion (soft), stronger on near stars
				const dx = s.x - pointer.x;
				const dy = s.y - pointer.y;
				const d2 = dx*dx + dy*dy;
						const R = 170;
						// Smooth per-star acceleration: ease toward target when near; decay otherwise
						if (d2 < R*R) {
							const d = Math.sqrt(d2) || 1;
							const f = (1 - d / R) * (1.0 + s.z * 1.0); // 0..2 depth-scaled
							const lax = (dx / d) * f * 1.2; // target local accel (reduced to be smoother)
							const lay = (dy / d) * f * 1.2;
							s.ax += (lax - s.ax) * 0.15; // ease factor
							s.ay += (lay - s.ay) * 0.15;
						} else {
							s.ax *= 0.9;
							s.ay *= 0.9;
						}

						// base drift (unaltered) + smoothed local mouse force only for nearby stars
						const vx = (BASE.x * s.speed) + s.ax;
						const vy = (BASE.y * s.speed) + s.ay;
				s.x += vx; s.y += vy;

				// respawn when off right or out of vertical bounds
				if (s.x > width + MARGIN || s.y < -MARGIN || s.y > height + MARGIN) {
					const repl = seedStar(false);
					s.x = repl.x; s.y = repl.y; s.px = s.x; s.py = s.y; s.z = repl.z; s.speed = repl.speed; s.size = repl.size;
				}

				// streak length based on speed and depth
	const len = 20 + s.speed * 28; // doubled streak length
				const nx = s.x - vx * len;
				const ny = s.y - vy * len;
				ctx.beginPath();
				ctx.moveTo(s.x, s.y);
				ctx.lineTo(nx, ny);
			const a = 0.35 + s.z * 0.45; // opacity 0.35..0.8 (still crisp)
			// crisp cool-white with slight blue by depth
			const r = Math.floor(210 - s.z * 40);
			const g = Math.floor(225 - s.z * 20);
			const b = Math.floor(255);
		ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
		ctx.lineWidth = 2 * Math.max(1, 1 + (s.size - 1.2) * 0.15); // doubled thickness
				ctx.stroke();
			}

			// click ripples for extra feedback
					ctx.globalAlpha = 0.2;
			wavesRef.current = wavesRef.current.filter(w => w.a > 0.01);
			for (const w of wavesRef.current) {
				ctx.beginPath();
				ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
						ctx.strokeStyle = `rgba(180,220,255,${w.a})`;
						ctx.lineWidth = 2;
				ctx.stroke();
						w.r += 10;
				w.a *= 0.96;
			}
		};
		loop();

		return () => {
			cancelAnimationFrame(rafRef.current);
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('click', onClick);
			wrap.remove();
			ring.remove();
		};
	}, []);

	return null;
}
