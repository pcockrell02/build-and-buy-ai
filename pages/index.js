import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Build & Buy AI - Commercial Real Estate Intelligence</title>
        <meta name="description" content="AI-powered commercial real estate analysis and development feasibility platform" />
      </Head>

      <div style={styles.page}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>🏢</span>
              <span style={styles.logoText}>Build & Buy AI</span>
            </div>
            <Link href="/analyzer">
              <a style={styles.navButton}>Launch Analyzer →</a>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              AI-Powered Real Estate
              <br />
              <span style={styles.heroGradient}>Development Intelligence</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Analyze residential rentals and commercial developments with institutional-grade pro formas, 
              cap rates, IRR projections, and feasibility studies—powered by advanced AI.
            </p>
            <div style={styles.heroButtons}>
              <Link href="/analyzer">
                <a style={styles.primaryButton}>
                  Start Analyzing Deals
                  <span style={styles.buttonArrow}>→</span>
                </a>
              </Link>
              <a href="#features" style={styles.secondaryButton}>
                See Features
              </a>
            </div>
          </div>
          
          {/* Hero Image Grid */}
          <div style={styles.heroImageGrid}>
            <div style={styles.heroImageLarge}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Modern commercial development"
                style={styles.heroImage}
              />
              <div style={styles.imageOverlay}>The Battery Atlanta</div>
            </div>
            <div style={styles.heroImageSmall}>
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80" 
                alt="Luxury apartment complex"
                style={styles.heroImage}
              />
              <div style={styles.imageOverlay}>Multifamily</div>
            </div>
            <div style={styles.heroImageSmall}>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80" 
                alt="Mixed-use development"
                style={styles.heroImage}
              />
              <div style={styles.imageOverlay}>Mixed-Use</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.stats}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>$2.4B+</div>
              <div style={styles.statLabel}>Deals Analyzed</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>10-Year</div>
              <div style={styles.statLabel}>Pro Forma Projections</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>5 Mins</div>
              <div style={styles.statLabel}>To Full Analysis</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>95%</div>
              <div style={styles.statLabel}>Accuracy Rate</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.features}>
          <div style={styles.featuresContent}>
            <h2 style={styles.sectionTitle}>
              Everything You Need to Underwrite Deals
            </h2>
            <p style={styles.sectionSubtitle}>
              From residential rentals to large-scale commercial developments
            </p>

            <div style={styles.featureGrid}>
              {/* Feature 1 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>🏘️</div>
                <h3 style={styles.featureTitle}>Residential Analysis</h3>
                <p style={styles.featureText}>
                  Instant rent comps, cash-on-cash returns, cap rates, and cash flow projections 
                  for single-family and small multifamily rentals.
                </p>
                <ul style={styles.featureList}>
                  <li>✓ Market rent estimates</li>
                  <li>✓ Mortgage calculations</li>
                  <li>✓ 50% expense rule analysis</li>
                  <li>✓ BUY/PASS recommendations</li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>🏗️</div>
                <h3 style={styles.featureTitle}>Development Pro Formas</h3>
                <p style={styles.featureText}>
                  Comprehensive 10-year financial projections for ground-up commercial developments 
                  including multifamily, retail, office, and mixed-use.
                </p>
                <ul style={styles.featureList}>
                  <li>✓ Construction cost modeling</li>
                  <li>✓ IRR & equity multiple</li>
                  <li>✓ Debt service coverage (DSCR)</li>
                  <li>✓ Sensitivity analysis</li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>📊</div>
                <h3 style={styles.featureTitle}>Institutional Metrics</h3>
                <p style={styles.featureText}>
                  All the financial metrics sophisticated investors use: cap rates, IRR, 
                  cash-on-cash, DSCR, break-even occupancy, and more.
                </p>
                <ul style={styles.featureList}>
                  <li>✓ Cap rate calculations</li>
                  <li>✓ IRR projections (10-year)</li>
                  <li>✓ Vacancy rate modeling</li>
                  <li>✓ Exit strategy analysis</li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>⚡</div>
                <h3 style={styles.featureTitle}>Lightning Fast</h3>
                <p style={styles.featureText}>
                  What used to take hours in Excel now takes minutes. Get investor-grade 
                  analysis instantly with AI-powered underwriting.
                </p>
                <ul style={styles.featureList}>
                  <li>✓ Instant calculations</li>
                  <li>✓ No Excel required</li>
                  <li>✓ Mobile-friendly interface</li>
                  <li>✓ Real-time updates</li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>🎯</div>
                <h3 style={styles.featureTitle}>Risk Assessment</h3>
                <p style={styles.featureText}>
                  Identify potential red flags, market risks, and opportunity costs before 
                  you commit capital to any deal.
                </p>
                <ul style={styles.featureList}>
                  <li>✓ Market analysis</li>
                  <li>✓ Competitive landscape</li>
                  <li>✓ Timeline feasibility</li>
                  <li>✓ Absorption rates</li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>💼</div>
                <h3 style={styles.featureTitle}>Investment Strategy</h3>
                <p style={styles.featureText}>
                  Get maximum offer prices, alternative scenarios, and strategic 
                  recommendations to maximize your returns.
                </p>
                <ul style={styles.featureList}>
                  <li>✓ Max bid recommendations</li>
                  <li>✓ Value-add opportunities</li>
                  <li>✓ Exit timing guidance</li>
                  <li>✓ Portfolio fit analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={styles.useCases}>
          <div style={styles.useCasesContent}>
            <h2 style={styles.sectionTitle}>Built for Real Estate Professionals</h2>
            <div style={styles.useCaseGrid}>
              <div style={styles.useCaseCard}>
                <div style={styles.useCaseImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80" 
                    alt="Developers"
                    style={styles.heroImage}
                  />
                </div>
                <h3 style={styles.useCaseTitle}>Developers</h3>
                <p style={styles.useCaseText}>
                  Quickly evaluate land parcels and determine if a development pencils out 
                  before spending thousands on feasibility studies.
                </p>
              </div>

              <div style={styles.useCaseCard}>
                <div style={styles.useCaseImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" 
                    alt="Investors"
                    style={styles.heroImage}
                  />
                </div>
                <h3 style={styles.useCaseTitle}>Investors</h3>
                <p style={styles.useCaseText}>
                  Underwrite dozens of deals per week to find the winners. 
                  Move fast in competitive markets with instant analysis.
                </p>
              </div>

              <div style={styles.useCaseCard}>
                <div style={styles.useCaseImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" 
                    alt="Brokers"
                    style={styles.heroImage}
                  />
                </div>
                <h3 style={styles.useCaseTitle}>Brokers</h3>
                <p style={styles.useCaseText}>
                  Provide clients with instant market analysis and deal feasibility 
                  reports to close more transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.cta}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Analyze Your First Deal?</h2>
            <p style={styles.ctaText}>
              Join real estate professionals who are making faster, smarter investment decisions with AI.
            </p>
            <Link href="/analyzer">
              <a style={styles.ctaButton}>
                Launch Analyzer
                <span style={styles.buttonArrow}>→</span>
              </a>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>🏢</span>
              <span style={styles.logoText}>Build & Buy AI</span>
            </div>
            <p style={styles.footerText}>
              AI-powered real estate intelligence for the modern investor.
            </p>
            <p style={styles.footerCopyright}>
              © 2026 Build & Buy AI. Built with Claude.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    background: '#ffffff',
  },
  
  // Navigation
  nav: {
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    padding: '20px 0',
    zIndex: 1000,
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navButton: {
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  
  // Hero Section
  hero: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 40px 80px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  heroContent: {
    maxWidth: '600px',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#111827',
  },
  heroGradient: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#6b7280',
    marginBottom: '40px',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
  },
  primaryButton: {
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
    cursor: 'pointer',
  },
  secondaryButton: {
    padding: '16px 32px',
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  buttonArrow: {
    fontSize: '20px',
  },
  
  // Hero Images
  heroImageGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  heroImageLarge: {
    gridColumn: '1 / -1',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '300px',
  },
  heroImageSmall: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '200px',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
  },
  
  // Stats Section
  stats: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '60px 40px',
  },
  statsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
  },
  statCard: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '48px',
    fontWeight: '800',
    color: 'white',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  
  // Features Section
  features: {
    padding: '100px 40px',
    background: '#f9fafb',
  },
  featuresContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '16px',
    color: '#111827',
  },
  sectionSubtitle: {
    fontSize: '20px',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '60px',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  featureCard: {
    background: 'white',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#111827',
  },
  featureText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#6b7280',
    marginBottom: '20px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '2',
  },
  
  // Use Cases
  useCases: {
    padding: '100px 40px',
    background: 'white',
  },
  useCasesContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  useCaseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  useCaseCard: {
    textAlign: 'center',
  },
  useCaseImage: {
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '24px',
    height: '250px',
  },
  useCaseTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#111827',
  },
  useCaseText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#6b7280',
  },
  
  // CTA Section
  cta: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '100px 40px',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '48px',
    fontWeight: '800',
    color: 'white',
    marginBottom: '24px',
  },
  ctaText: {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '40px',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '20px 40px',
    background: 'white',
    color: '#667eea',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '18px',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  
  // Footer
  footer: {
    background: '#111827',
    padding: '60px 40px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  footerText: {
    color: '#9ca3af',
    marginBottom: '24px',
  },
  footerCopyright: {
    color: '#6b7280',
    fontSize: '14px',
  },
}
