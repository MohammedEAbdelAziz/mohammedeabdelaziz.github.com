<script lang="ts">
</script>

<svelte:head>
	<title>Mohammed Essam - Systems Architect & Product Engineer</title>
	<meta
		name="description"
		content="Systems Architect specializing in Local-First Architecture (Rust/Tauri) and High-Concurrency Backends (Go). Building high-performance software that respects hardware constraints."
	/>
</svelte:head>

<main class="split-container">
	<!-- Left Column: Fixed Bio, Contact, Stack -->
	<aside class="bio-column">
		<div class="bio-content">
			<!-- Status Indicator -->
			<div class="status-indicator">
				<span class="status-dot"></span>
				<span class="status-text">Building privacy-tech @ TimePerch</span>
			</div>

			<!-- Hero Section -->
			<div class="hero-section">
				<h1 class="hero-title">Systems Architect & Product Engineer.</h1>
				<p class="hero-subtitle">
					I build high-performance software that respects hardware constraints. Specializing in <strong
						>Local-First Architecture (Rust/Tauri)</strong
					>
					and <strong>High-Concurrency Backends (Go)</strong>.
				</p>
				<p class="hero-bio">
					I believe modern software has become unnecessarily bloated. My work focuses on returning
					to efficiency—building systems that run faster, use less memory, and work offline by
					default.
				</p>
				<p class="hero-bio">
					I am the Lead Engineer at <a href="https://akamaar.dev" target="_blank">Akamaar</a>, where
					I help founders ship commercial-grade MVPs. Currently, I am architecting
					<a href="https://timeperch.app" target="_blank">TimePerch</a>, a privacy-first alternative
					to invasive employee monitoring.
				</p>
				<div class="hero-cta">
					<a href="/articles">Read My Engineering Notes</a>
					<span class="cta-separator">•</span>
					<a href="https://github.com/MohammedEAbdelAziz" target="_blank">View Source Code</a>
					<span class="cta-separator">•</span>
					<a href="/Mohammed Essam.pdf" download>Download CV</a>
				</div>
			</div>

			<!-- Stack Grid -->
			<div class="stack-section">
				<h3 class="stack-title">The Arsenal</h3>
				<table class="stack-table">
					<tbody>
						<tr>
							<td class="stack-domain">Systems</td>
							<td class="stack-tech">Rust, Golang, C, Linux Kernel (Basics)</td>
						</tr>
						<tr>
							<td class="stack-domain">Application</td>
							<td class="stack-tech">Svelte 5, Tauri (v2), TypeScript, Python</td>
						</tr>
						<tr>
							<td class="stack-domain">Infrastructure</td>
							<td class="stack-tech">Docker, PostgreSQL, ONNX Runtime, Nginx</td>
						</tr>
						<tr>
							<td class="stack-domain">Philosophy</td>
							<td class="stack-tech">Local-First, Zero-Trust, Offline-Capable</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Contact Section -->
			<div class="contact-section">
				<p class="contact-text">
					I am always open to discussing <strong>Systems Architecture</strong>,
					<strong>Rust</strong>, or <strong>Privacy Tech</strong>.
				</p>
				<p class="contact-text">
					If you are a founder looking for a technical partner, visit <a
						href="https://akamaar.dev"
						target="_blank">Akamaar.dev</a
					>.
				</p>
				<p class="contact-text">
					For technical discourse, <a href="mailto:mo@akamaar.dev">Email Me</a>.
				</p>
			</div>
		</div>
	</aside>

	<!-- Right Column: Scrollable Work & Writing -->
	<div class="work-column">
		<!-- Selected Work Section -->
		<section class="work-section">
			<h2 class="section-title">Selected Work</h2>

			<article class="project-entry">
				<div class="project-header">
					<span class="project-number">01</span>
					<h3 class="project-title">
						<a href="https://timeperch.app" target="_blank">TimePerch</a>
					</h3>
					<span class="project-dots"></span>
					<span class="project-stack">[Rust, Tauri, Python]</span>
				</div>
				<p class="project-description">
					Privacy-focused employee activity tracking and compliance assurance platform.
				</p>
				<div class="project-details">
					<p>
						<strong>The Challenge:</strong> Building a privacy-first employee monitoring system that ensures
						compliance while respecting data sovereignty—all activity data remains local, yet the server
						stays informed for reporting and analytics.
					</p>
					<p>
						<strong>The Engineering:</strong> Architected a Hybrid Store-and-Forward synchronization engine
						using Rust and SQLite.
					</p>
					<ul
						style="margin-left: 2.5rem; list-style-type: disc; font-size: 0.875rem; line-height: 1.6; color: var(--color-text-secondary);"
					>
						<li style="margin-bottom: 0.5rem;">
							<strong>Optimized Network Strategy:</strong> Implemented a split-protocol where high-volume
							telemetry is micro-batched to reduce overhead, while critical state transitions (e.g., "Shift
							Start") trigger immediate, event-driven propagation.
						</li>
						<li style="margin-bottom: 0.5rem;">
							<strong>Fault Tolerance:</strong> Designed a local persistence queue that buffers data during
							outages. The system utilizes an exponential backoff algorithm to retry failed syncs, ensuring
							eventual consistency without overwhelming the server upon reconnection.
						</li>
						<li style="margin-bottom: 0.5rem;">
							<strong>Data Integrity:</strong> Enforced idempotency via client-generated UUIDs to prevent
							duplicate entries during retry storms.
						</li>
					</ul>
					<p><strong>Stack:</strong> Rust, Tauri, Svelte 5, Python, Golang.</p>
				</div>
			</article>

			<article class="project-entry">
				<div class="project-header">
					<span class="project-number">02</span>
					<h3 class="project-title">
						<a href="https://trendscope.akamaar.dev" target="_blank">TrendScope</a>
					</h3>
					<span class="project-dots"></span>
					<span class="project-stack">[AI Engineering]</span>
				</div>
				<p class="project-description">
					Near real-time financial headlines sentiment analysis for market intelligence.
				</p>
				<div class="project-details">
					<p>
						<strong>The Challenge:</strong> Analyzing sentiment from thousands of financial news headlines
						in near real-time using heavy NLP models on low-cost CPU infrastructure without latency spikes.
					</p>
					<p>
						<strong>The Engineering:</strong> Optimized a DistilRoBERTa transformer model using
						<strong>ONNX Runtime</strong>
						and <strong>Dynamic Quantization</strong>. Reduced server costs to near-zero while
						maintaining 94% sentiment accuracy. Implemented Celery for distributed task processing
						with 15-minute intervals to handle high-volume news feeds while managing CPU load
						efficiently.
					</p>
					<p><strong>Stack:</strong> Python, ONNX Runtime, Celery.</p>
				</div>
			</article>

			<article class="project-entry">
				<div class="project-header">
					<span class="project-number">03</span>
					<h3 class="project-title">
						<a href="https://infrawatcher.akamaar.dev" target="_blank">InfraWatcher</a>
					</h3>
					<span class="project-dots"></span>
					<span class="project-stack">[Automation, LLMs]</span>
				</div>
				<p class="project-description">
					Proactive outage detection and automated client communication for agencies.
				</p>
				<div class="project-details">
					<p>
						<strong>The Challenge:</strong> Detecting infrastructure outages from major service providers
						(Cloudflare, AWS, GCP) the moment they occur, then automatically notifying affected clients
						based on their dependency stack.
					</p>
					<p>
						<strong>The Engineering:</strong> Built a real-time web scraper that monitors status pages
						of major cloud providers. Implemented a PostgreSQL-backed dependency mapping system using
						foreign keys to track which clients rely on which services. When an outage is detected, the
						system leverages LLMs to draft contextual notification and apology emails tailored to each
						affected client's specific service dependencies.
					</p>
					<p><strong>Stack:</strong> Python, SvelteKit, PostgreSQL, LLMs.</p>
				</div>
			</article>
		</section>

		<!-- The Lab Section -->
		<section class="work-section">
			<h2 class="section-title">The Lab</h2>

			<article class="lab-entry">
				<h3 class="lab-title">
					<a href="https://github.com/Chatit-cloud/BEE2BEE" target="_blank">BEE2BEE</a>
					<span class="lab-tag">(P2P AI Network)</span>
				</h3>
				<p class="lab-description">
					A decentralized experiment in routing AI inference requests. Allows users to share local
					GPU compute power across a peer-to-peer network, bypassing centralized cloud APIs.
				</p>
			</article>

			<article class="lab-entry">
				<h3 class="lab-title">
					<a href="https://akamaar.dev" target="_blank">Akamaar.dev</a>
					<span class="lab-tag">(My Firm)</span>
				</h3>
				<p class="lab-description">
					My commercial consultancy. We specialize in rescuing legacy codebases and shipping
					greenfield MVPs for Seed-stage founders.
				</p>
			</article>
		</section>

		<!-- Writing Section (Link to Articles) -->
		<section class="work-section">
			<h2 class="section-title">Writing</h2>
			<p class="writing-intro">
				Technical notes on systems architecture, performance optimization, and privacy engineering.
			</p>
			<a href="/articles" class="writing-link">View All Articles →</a>
		</section>
	</div>
</main>
