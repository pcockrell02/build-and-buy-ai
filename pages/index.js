import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>CapFlow - Invest With Confidence</title>
        <meta name="description" content="The unfair advantage every real estate investor needs. Institutional-grade pro formas in 5 minutes." />
      </Head>

      <div style={styles.page}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>📊</span>
              <span style={styles.logoText}>CapFlow</span>
            </div>
            <div style={styles.navLinks}>
              <a href="#features" style={styles.navLink}>Features</a>
              <a href="#pricing" style={styles.navLink}>Pricing</a>
              <a href="#about" style={styles.navLink}>About</a>
              <Link href="/analyzer">
                <a style={styles.ctaButton}>Launch Analyzer →</a>
              </Link>
            </div>
          </div>
        </nav>

        <div style={styles.mainContent}>
          {/* Sidebar */}
          <aside style={styles.sidebar}>
            <div style={styles.sidebarContent}>
              <h3 style={styles.sidebarTitle}>Quick Start</h3>
              
              <Link href="/analyzer">
                <a style={styles.sidebarButton}>
                  <span style={styles.sidebarIcon}>🏘️</span>
                  <div>
                    <div style={styles.sidebarButtonTitle}>Rental Analysis</div>
                    <div style={styles.sidebarButtonDesc}>Single & multifamily</div>
                  </div>
                </a>
              </Link>
              
              <Link href="/analyzer">
                <a style={styles.sidebarButton}>
                  <span style={styles.sidebarIcon}>🏗️</span>
                  <div>
                    <div style={styles.sidebarButtonTitle}>Development Pro Forma</div>
                    <div style={styles.sidebarButtonDesc}>Ground-up construction</div>
                  </div>
                </a>
              </Link>
              
              <div style={styles.sidebarDivider}></div>
              
              <div style={styles.sidebarStats}>
                <div style={styles.sidebarStat}>
                  <div style={styles.sidebarStatNumber}>$2.4B+</div>
                  <div style={styles.sidebarStatLabel}>Analyzed</div>
                </div>
                <div style={styles.sidebarStat}>
                  <div style={styles.sidebarStatNumber}>5 min</div>
                  <div style={styles.sidebarStatLabel}>Per Deal</div>
                </div>
                <div style={styles.sidebarStat}>
                  <div style={styles.sidebarStatNumber}>847</div>
                  <div style={styles.sidebarStatLabel}>Closed</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main style={styles.content}>
            {/* Hero Section */}
            <section style={styles.hero}>
              <div style={styles.heroContent}>
                <div style={styles.badge}>
                  <span style={styles.badgeDot}>●</span>
                  <span style={styles.badgeText}>Trusted by 800+ investors</span>
                </div>
                
                <h1 style={styles.heroTitle}>
                  Invest With
                  <br />
                  <span style={styles.heroGradient}>Confidence</span>
                </h1>
                
                <p style={styles.heroSubtitle}>
                  The unfair advantage every real estate investor needs—institutional-grade 
                  pro formas in 5 minutes. No Excel. No consultants. No guesswork.
                </p>
                
                <div style={styles.heroButtons}>
                  <Link href="/analyzer">
                    <a style={styles.primaryButton}>
                      <span>Start Analyzing Free</span>
                      <span style={styles.buttonArrow}>→</span>
                    </a>
                  </Link>
                  <a href="#features" style={styles.secondaryButton}>
                    See How It Works
                  </a>
                </div>
                
                <div style={styles.heroFeatures}>
                  <div style={styles.heroFeature}>
                    <span style={styles.checkmark}>✓</span>
                    <span>No credit card</span>
                  </div>
                  <div style={styles.heroFeature}>
                    <span style={styles.checkmark}>✓</span>
                    <span>3 free analyses</span>
                  </div>
                  <div style={styles.heroFeature}>
                    <span style={styles.checkmark}>✓</span>
                    <span>5-minute setup</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div style={styles.heroVisual}>
                <div style={styles.dashboardCard}>
                  <div style={styles.cardHeader}>
                    <div style={styles.cardTitle}>Analysis Results</div>
                    <div style={styles.cardBadge}>Strong Buy</div>
                  </div>
                  <div style={styles.metrics}>
                    <div style={styles.metricRow}>
                      <span style={styles.metricLabel}>Cap Rate</span>
                      <span style={styles.metricValue}>8.2%</span>
                    </div>
                    <div style={styles.metricRow}>
                      <span style={styles.metricLabel}>Cash-on-Cash</span>
                      <span style={styles.metricValue}>12.4%</span>
                    </div>
                    <div style={styles.metricRow}>
                      <span style={styles.metricLabel}>10-Year IRR</span>
                      <span style={styles.metricValue}>18.7%</span>
                    </div>
                    <div style={styles.metricRow}>
                      <span style={styles.metricLabel}>Monthly Cash Flow</span>
                      <span style={styles.metricValue}>+$847</span>
                    </div>
                  </div>
                  <div style={styles.cardFooter}>
                    <span style={styles.recommendation}>
                      💡 Max offer: $312,000
                    </span>
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" 
                  alt="Commercial real estate"
                  style={styles.heroImage}
                />
              </div>
            </section>

            {/* Social Proof */}
            <section style={styles.socialProof}>
              <div style={styles.testimonialCard}>
                <div style={styles.quoteIcon}>"</div>
                <p style={styles.testimonialText}>
                  I found a hidden gem property in 10 minutes that I would have passed on. 
                  Made $187K on the flip. CapFlow paid for itself 100x over.
                </p>
                <div style={styles.testimonialAuthor}>
                  <div style={styles.authorName}>Marcus Thompson</div>
                  <div style={styles.authorTitle}>Real Estate Developer, Greenville SC</div>
                </div>
              </div>
            </section>

            {/* Value Props */}
            <section style={styles.valueProps}>
              <div style={styles.valuePropCard}>
                <div style={styles.valuePropIcon}>⚡</div>
                <div style={styles.valuePropNumber}>5 min</div>
                <div style={styles.valuePropLabel}>Analysis Time</div>
                <div style={styles.valuePropDesc}>vs. 4 hours in Excel</div>
              </div>
              <div style={styles.valuePropCard}>
                <div style={styles.valuePropIcon}>💰</div>
                <div style={styles.valuePropNumber}>$5,000</div>
                <div style={styles.valuePropLabel}>Consultant Cost</div>
                <div style={styles.valuePropDesc}>You pay $49/month</div>
              </div>
              <div style={styles.valuePropCard}>
                <div style={styles.valuePropIcon}>📈</div>
                <div style={styles.valuePropNumber}>20x</div>
                <div style={styles.valuePropLabel}>More Deals</div>
                <div style={styles.valuePropDesc}>Analyzed per week</div>
              </div>
            </section>

            {/* Features */}
            <section style={styles.features} id="features">
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Everything You Need to Win Deals</h2>
                <p style={styles.sectionSubtitle}>
                  From $200K rentals to $50M developments
                </p>
              </div>

              <div style={styles.featureGrid}>
                <div style={styles.featureCard}>
                  <div style={styles.featureIconLarge}>🏘️</div>
                  <h3 style={styles.featureTitle}>Residential Rentals</h3>
                  <p style={styles.featureText}>
                    Instant rent comps, cash flow projections, and BUY/PASS recommendations 
                    for single-family and small multifamily properties.
                  </p>
                  <ul style={styles.featureList}>
                    <li>Cap rate & cash-on-cash returns</li>
                    <li>Market rent analysis</li>
                    <li>Max offer calculator</li>
                    <li>50% expense rule built-in</li>
                  </ul>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIconLarge}>🏗️</div>
                  <h3 style={styles.featureTitle}>Commercial Pro Formas</h3>
                  <p style={styles.featureText}>
                    10-year financial projections for ground-up developments. Multifamily, 
                    retail, office, mixed-use—all with complete construction modeling.
                  </p>
                  <ul style={styles.featureList}>
                    <li>IRR & equity multiple</li>
                    <li>Debt service coverage (DSCR)</li>
                    <li>Sensitivity analysis</li>
                    <li>Break-even occupancy</li>
                  </ul>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIconLarge}>🎯</div>
                  <h3 style={styles.featureTitle}>Risk Assessment</h3>
                  <p style={styles.featureText}>
                    Identify red flags before you commit capital. Market analysis, absorption 
                    rates, and scenario planning included.
                  </p>
                  <ul style={styles.featureList}>
                    <li>Worst-case scenarios</li>
                    <li>Market comp analysis</li>
                    <li>Timeline feasibility</li>
                    <li>Exit strategy options</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section style={styles.pricing} id="pricing">
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Simple, Transparent Pricing</h2>
                <p style={styles.sectionSubtitle}>
                  Start free. Upgrade when you're ready. Cancel anytime.
                </p>
              </div>

              <div style={styles.pricingGrid}>
                <div style={styles.pricingCard}>
                  <div style={styles.pricingHeader}>
                    <div style={styles.pricingBadge}>FREE</div>
                    <div style={styles.pricingName}>Starter</div>
                    <div style={styles.pricingPrice}>
                      <span style={styles.priceAmount}>$0</span>
                      <span style={styles.pricePeriod}>/month</span>
                    </div>
                  </div>
                  <ul style={styles.pricingFeatures}>
                    <li style={styles.featureIncluded}>3 analyses per month</li>
                    <li style={styles.featureIncluded}>Residential rentals</li>
                    <li style={styles.featureIncluded}>Basic metrics</li>
                    <li style={styles.featureDisabled}>Commercial pro formas</li>
                    <li style={styles.featureDisabled}>Save history</li>
                    <li style={styles.featureDisabled}>PDF exports</li>
                  </ul>
                  <Link href="/analyzer">
                    <a style={styles.pricingButton}>Start Free</a>
                  </Link>
                </div>

                <div style={styles.pricingCardFeatured}>
                  <div style={styles.popularBadge}>MOST POPULAR</div>
                  <div style={styles.pricingHeader}>
                    <div style={styles.pricingBadge}>PRO</div>
                    <div style={styles.pricingName}>Professional</div>
                    <div style={styles.pricingPrice}>
                      <span style={styles.priceAmount}>$49</span>
                      <span style={styles.pricePeriod}>/month</span>
                    </div>
                  </div>
                  <ul style={styles.pricingFeatures}>
                    <li style={styles.featureIncluded}>Unlimited residential</li>
                    <li style={styles.featureIncluded}>10 commercial/month</li>
                    <li style={styles.featureIncluded}>All advanced metrics</li>
                    <li style={styles.featureIncluded}>Save analysis history</li>
                    <li style={styles.featureIncluded}>PDF exports</li>
                    <li style={styles.featureIncluded}>Priority support</li>
                  </ul>
                  <Link href="/analyzer">
                    <a style={styles.pricingButtonPrimary}>Start Pro Trial</a>
                  </Link>
                </div>

                <div style={styles.pricingCard}>
                  <div style={styles.pricingHeader}>
                    <div style={styles.pricingBadge}>DEVELOPER</div>
                    <div style={styles.pricingName}>Enterprise</div>
                    <div style={styles.pricingPrice}>
                      <span style={styles.priceAmount}>$199</span>
                      <span style={styles.pricePeriod}>/month</span>
                    </div>
                  </div>
                  <ul style={styles.pricingFeatures}>
                    <li style={styles.featureIncluded}>Everything in Pro</li>
                    <li style={styles.featureIncluded}>Unlimited commercial</li>
                    <li style={styles.featureIncluded}>White-label reports</li>
                    <li style={styles.featureIncluded}>API access</li>
                    <li style={styles.featureIncluded}>Team collaboration</li>
                    <li style={styles.featureIncluded}>Dedicated support</li>
                  </ul>
                  <a href="#contact" style={styles.pricingButton}>Contact Sales</a>
                </div>
              </div>
            </section>

            {/* About */}
            <section style={styles.about} id="about">
              <div style={styles.aboutContent}>
                <div style={styles.aboutText}>
                  <div style={styles.aboutLabel}>OUR STORY</div>
                  <h2 style={styles.aboutTitle}>Built By Developers, For Developers</h2>
                  <p style={styles.aboutParagraph}>
                    I spent years in construction and real estate development. Every weekend, 
                    I'd lose hours building Excel models—second-guessing formulas, missing 
                    hidden costs, and watching faster investors beat me to good deals.
                  </p>
                  <p style={styles.aboutParagraph}>
                    So I built CapFlow. The same analysis consultants charge $5,000 for, 
                    you get in 5 minutes. Now I analyze 20+ deals per week instead of 2.
                  </p>
                  <p style={styles.aboutParagraph}>
                    No more Excel nightmares. No more overpaying. Just confident, 
                    data-driven decisions.
                  </p>
                  <div style={styles.signature}>
                    <div style={styles.signatureName}>Parker Cockrell</div>
                    <div style={styles.signatureTitle}>Founder, CapFlow</div>
                  </div>
                </div>
                <div style={styles.aboutImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" 
                    alt="Development"
                    style={styles.aboutPhoto}
                  />
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section style={styles.finalCTA}>
              <h2 style={styles.finalCTATitle}>Ready to Invest With Confidence?</h2>
              <p style={styles.finalCTAText}>
                Join 800+ investors making faster, smarter decisions.
              </p>
              <Link href="/analyzer">
                <a style={styles.finalCTAButton}>
                  Start Free Today →
                </a>
              </Link>
              <p style={styles.finalCTAFootnote}>
                No credit card required • 3 free analyses • Cancel anytime
              </p>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>
              <div style={styles.logo}>
                <span style={styles.logoIcon}>📊</span>
                <span style={styles.logoText}>CapFlow</span>
              </div>
              <p style={styles.footerTagline}>
                Where capital meets cash flow
              </p>
            </div>
            <div style={styles.footerLinks}>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerTitle}>Product</h4>
                <a href="#features" style={styles.footerLink}>Features</a>
                <a href="#pricing" style={styles.footerLink}>Pricing</a>
                <Link href="/analyzer"><a style={styles.footerLink}>Analyzer</a></Link>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerTitle}>Company</h4>
                <a href="#about" style={styles.footerLink}>About</a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.copyright}>© 2026 CapFlow. Built with Claude.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    background: '#0f172a',
    color: '#e2e8f0',
    minHeight: '100vh',
  },
  
  // Navigation
  nav: {
    position: 'sticky',
    top: 0,
    background: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
    padding: '16px 0',
    zIndex: 1000,
  },
  navContent: {
    maxWidth: '1400px',
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
    cursor: 'pointer',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '15px',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  ctaButton: {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
    cursor: 'pointer',
  },
  
  // Main Layout
  mainContent: {
    display: 'flex',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  
  // Sidebar
  sidebar: {
    width: '280px',
    position: 'sticky',
    top: '80px',
    height: 'calc(100vh - 80px)',
    padding: '32px 20px',
    borderRight: '1px solid rgba(148, 163, 184, 0.1)',
    background: 'rgba(30, 41, 59, 0.5)',
  },
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sidebarTitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  sidebarButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'rgba(51, 65, 85, 0.5)',
    borderRadius: '12px',
    textDecoration: 'none',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  sidebarIcon: {
    fontSize: '24px',
  },
  sidebarButtonTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#e2e8f0',
  },
  sidebarButtonDesc: {
    fontSize: '12px',
    color: '#94a3b8',
  },
  sidebarDivider: {
    height: '1px',
    background: 'rgba(148, 163, 184, 0.1)',
    margin: '16px 0',
  },
  sidebarStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sidebarStat: {
    textAlign: 'center',
  },
  sidebarStatNumber: {
    fontSize: '28px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  sidebarStatLabel: {
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  
  // Main Content
  content: {
    flex: 1,
    padding: '60px 60px',
  },
  
  // Hero
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    marginBottom: '100px',
    alignItems: 'center',
  },
  heroContent: {
    maxWidth: '600px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '20px',
    marginBottom: '24px',
  },
  badgeDot: {
    color: '#06b6d4',
    fontSize: '8px',
  },
  badgeText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#06b6d4',
  },
  heroTitle: {
    fontSize: '64px',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#f1f5f9',
  },
  heroGradient: {
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '20px',
    lineHeight: '1.7',
    color: '#94a3b8',
    marginBottom: '32px',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
    cursor: 'pointer',
  },
  secondaryButton: {
    padding: '16px 32px',
    background: 'transparent',
    color: '#06b6d4',
    border: '2px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
  },
  buttonArrow: {
    fontSize: '18px',
  },
  heroFeatures: {
    display: 'flex',
    gap: '24px',
  },
  heroFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#94a3b8',
  },
  checkmark: {
    color: '#10b981',
    fontWeight: 'bold',
  },
  
  // Hero Visual
  heroVisual: {
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  dashboardCard: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: 'rgba(30, 41, 59, 0.95)',
    backdropFilter: 'blur(12px)',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)',
    minWidth: '280px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  cardBadge: {
    padding: '4px 12px',
    background: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '700',
  },
  metrics: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  metricRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: '14px',
    color: '#94a3b8',
  },
  metricValue: {
    fontSize: '18px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  cardFooter: {
    marginTop: '16px',
    paddingTop: '12px',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
  recommendation: {
    fontSize: '14px',
    color: '#06b6d4',
    fontWeight: '600',
  },
  
  // Social Proof
  socialProof: {
    marginBottom: '80px',
  },
  testimonialCard: {
    padding: '40px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    position: 'relative',
  },
  quoteIcon: {
    fontSize: '64px',
    color: 'rgba(6, 182, 212, 0.2)',
    position: 'absolute',
    top: '20px',
    left: '30px',
  },
  testimonialText: {
    fontSize: '20px',
    lineHeight: '1.7',
    color: '#e2e8f0',
    marginBottom: '24px',
    fontStyle: 'italic',
    position: 'relative',
    zIndex: 1,
  },
  testimonialAuthor: {
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    paddingTop: '16px',
  },
  authorName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#f1f5f9',
  },
  authorTitle: {
    fontSize: '14px',
    color: '#94a3b8',
  },
  
  // Value Props
  valueProps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '100px',
  },
  valuePropCard: {
    padding: '32px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    textAlign: 'center',
  },
  valuePropIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  valuePropNumber: {
    fontSize: '48px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '8px',
  },
  valuePropLabel: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: '4px',
  },
  valuePropDesc: {
    fontSize: '14px',
    color: '#64748b',
  },
  
  // Features
  features: {
    marginBottom: '100px',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#f1f5f9',
    marginBottom: '16px',
  },
  sectionSubtitle: {
    fontSize: '20px',
    color: '#94a3b8',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  featureCard: {
    padding: '40px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  featureIconLarge: {
    fontSize: '56px',
    marginBottom: '24px',
  },
  featureTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: '16px',
  },
  featureText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#94a3b8',
    marginBottom: '24px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  
  // Pricing
  pricing: {
    marginBottom: '100px',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pricingCard: {
    padding: '40px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    position: 'relative',
  },
  pricingCardFeatured: {
    padding: '40px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '2px solid #06b6d4',
    boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)',
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px 16px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  pricingHeader: {
    marginBottom: '32px',
  },
  pricingBadge: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '12px',
  },
  pricingName: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: '16px',
  },
  pricingPrice: {
    marginBottom: '8px',
  },
  priceAmount: {
    fontSize: '56px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  pricePeriod: {
    fontSize: '18px',
    color: '#64748b',
  },
  pricingFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 32px 0',
    fontSize: '15px',
    lineHeight: '2.2',
  },
  featureIncluded: {
    color: '#e2e8f0',
  },
  featureDisabled: {
    color: '#475569',
  },
  pricingButton: {
    display: 'block',
    width: '100%',
    padding: '14px',
    background: 'transparent',
    color: '#06b6d4',
    border: '2px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    textAlign: 'center',
    cursor: 'pointer',
  },
  pricingButtonPrimary: {
    display: 'block',
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
    cursor: 'pointer',
  },
  
  // About
  about: {
    marginBottom: '100px',
    padding: '60px',
    background: 'rgba(30, 41, 59, 0.3)',
    borderRadius: '24px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  aboutText: {},
  aboutLabel: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#06b6d4',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '16px',
  },
  aboutTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#f1f5f9',
    marginBottom: '24px',
  },
  aboutParagraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#94a3b8',
    marginBottom: '20px',
  },
  signature: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
  signatureName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#f1f5f9',
  },
  signatureTitle: {
    fontSize: '16px',
    color: '#64748b',
  },
  aboutImage: {},
  aboutPhoto: {
    width: '100%',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
  },
  
  // Final CTA
  finalCTA: {
    textAlign: 'center',
    padding: '80px 60px',
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
    borderRadius: '24px',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    marginBottom: '60px',
  },
  finalCTATitle: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#f1f5f9',
    marginBottom: '16px',
  },
  finalCTAText: {
    fontSize: '20px',
    color: '#94a3b8',
    marginBottom: '32px',
  },
  finalCTAButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '18px 36px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '18px',
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
    cursor: 'pointer',
  },
  finalCTAFootnote: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#64748b',
  },
  
  // Footer
  footer: {
    padding: '60px 60px 40px',
    background: 'rgba(15, 23, 42, 0.5)',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '60px',
    marginBottom: '40px',
  },
  footerBrand: {},
  footerTagline: {
    color: '#64748b',
    fontSize: '16px',
    marginTop: '12px',
    fontStyle: 'italic',
  },
  footerLinks: {
    display: 'flex',
    gap: '60px',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  footerTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: '8px',
  },
  footerLink: {
    fontSize: '14px',
    color: '#64748b',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  footerBottom: {
    paddingTop: '32px',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '14px',
    color: '#475569',
    margin: 0,
  },
}
