import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <>
      <Head>
        <title>CapFlow - Real Estate Deal Analysis Platform</title>
        <meta name="description" content="Analyze rental properties and commercial developments in minutes. Professional pro formas, cap rates, and IRR projections." />
      </Head>

      <div style={styles.page}>
        {/* Top Navigation Bar */}
        <nav style={styles.topNav}>
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
          {/* Left Sidebar - Quick Access */}
          <aside style={styles.sidebar}>
            <div style={styles.sidebarContent}>
              <h3 style={styles.sidebarTitle}>Quick Start</h3>
              <Link href="/analyzer">
                <a style={styles.sidebarButton}>
                  <span style={styles.sidebarIcon}>🏘️</span>
                  <div>
                    <div style={styles.sidebarButtonTitle}>Rental Analysis</div>
                    <div style={styles.sidebarButtonDesc}>Single-family & multifamily</div>
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
                  <div style={styles.sidebarStatLabel}>Deals Closed</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main style={styles.content}>
            {/* Hero Section */}
            <section style={styles.hero} id="hero">
              <div style={styles.heroContent}>
                <div style={styles.badge}>
                  <span style={styles.badgeText}>🚀 Built by real estate developers, for developers</span>
                </div>
                <h1 style={styles.heroTitle}>
                  Stop Losing Money on
                  <br />
                  <span style={styles.heroGradient}>Bad Real Estate Deals</span>
                </h1>
                <p style={styles.heroSubtitle}>
                  You're 3 spreadsheets deep, second-guessing your assumptions, and watching 
                  another investor beat you to the deal. CapFlow analyzes any property in 
                  5 minutes—with institutional-grade pro formas that would cost $5,000 from a consultant.
                </p>
                <div style={styles.heroButtons}>
                  <Link href="/analyzer">
                    <a style={styles.primaryButton}>
                      Start Analyzing Free
                      <span style={styles.buttonArrow}>→</span>
                    </a>
                  </Link>
                  <a href="#features" style={styles.secondaryButton}>
                    See How It Works
                  </a>
                </div>
                
                {/* Social Proof */}
                <div style={styles.socialProof}>
                  <div style={styles.testimonial}>
                    <div style={styles.quote}>"I found a hidden gem property in 10 minutes that I would have passed on. Made $187K on the flip."</div>
                    <div style={styles.author}>— Marcus T., Real Estate Developer, Greenville SC</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div style={styles.heroImage}>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" 
                  alt="Modern commercial development"
                  style={styles.mainImage}
                />
                <div style={styles.floatingCard}>
                  <div style={styles.floatingCardTitle}>Sample Analysis</div>
                  <div style={styles.metric}>
                    <span style={styles.metricLabel}>Cap Rate:</span>
                    <span style={styles.metricValue}>8.2%</span>
                  </div>
                  <div style={styles.metric}>
                    <span style={styles.metricLabel}>Cash-on-Cash:</span>
                    <span style={styles.metricValue}>12.4%</span>
                  </div>
                  <div style={styles.metric}>
                    <span style={styles.metricLabel}>10-Year IRR:</span>
                    <span style={styles.metricValue}>18.7%</span>
                  </div>
                  <div style={styles.recommendation}>✅ Strong Buy</div>
                </div>
              </div>
            </section>

            {/* Pain Points Section */}
            <section style={styles.painPoints}>
              <h2 style={styles.sectionTitle}>Real Estate Investors Waste 40+ Hours Per Month On:</h2>
              <div style={styles.painGrid}>
                <div style={styles.painCard}>
                  <span style={styles.painIcon}>❌</span>
                  <h3 style={styles.painTitle}>Excel Hell</h3>
                  <p style={styles.painText}>Building complex models that break when you change one cell</p>
                </div>
                <div style={styles.painCard}>
                  <span style={styles.painIcon}>❌</span>
                  <h3 style={styles.painTitle}>Guessing Costs</h3>
                  <p style={styles.painText}>Construction costs that blow your budget by 30%</p>
                </div>
                <div style={styles.painCard}>
                  <span style={styles.painIcon}>❌</span>
                  <h3 style={styles.painTitle}>Hidden Expenses</h3>
                  <p style={styles.painText}>Missing vacancy rates, CapEx, or OpEx that kill your returns</p>
                </div>
                <div style={styles.painCard}>
                  <span style={styles.painIcon}>❌</span>
                  <h3 style={styles.painTitle}>Losing Deals</h3>
                  <p style={styles.painText}>Faster-moving investors win while you're still underwriting</p>
                </div>
                <div style={styles.painCard}>
                  <span style={styles.painIcon}>❌</span>
                  <h3 style={styles.painTitle}>Expensive Consultants</h3>
                  <p style={styles.painText}>Paying $2,500+ per pro forma from consultants</p>
                </div>
                <div style={styles.painCard}>
                  <span style={styles.painIcon}>❌</span>
                  <h3 style={styles.painTitle}>Overpaying</h3>
                  <p style={styles.painText}>No max offer guidance = leaving $50K+ on the table</p>
                </div>
              </div>
              <div style={styles.painSolution}>
                <p style={styles.painSolutionText}>CapFlow solves all of this in 5 minutes.</p>
              </div>
            </section>

            {/* Features Section */}
            <section style={styles.features} id="features">
              <h2 style={styles.sectionTitle}>Everything You Need to Underwrite Deals</h2>
              <p style={styles.sectionSubtitle}>From $200K rentals to $50M developments</p>

              <div style={styles.featureGrid}>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>⚡</div>
                  <h3 style={styles.featureTitle}>5-Minute Analysis</h3>
                  <p style={styles.featureText}>
                    What used to take 4 hours in Excel now takes 5 minutes. Analyze 20+ deals 
                    per week instead of 2.
                  </p>
                  <div style={styles.featureBenefit}>💰 Save 40 hours/month</div>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>🏘️</div>
                  <h3 style={styles.featureTitle}>Residential Rentals</h3>
                  <p style={styles.featureText}>
                    Instant rent comps, mortgage calculations, cash flow projections, and 
                    BUY/PASS recommendations.
                  </p>
                  <div style={styles.featureBenefit}>📈 12%+ cash-on-cash targets</div>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>🏗️</div>
                  <h3 style={styles.featureTitle}>Commercial Pro Formas</h3>
                  <p style={styles.featureText}>
                    10-year projections for multifamily, retail, office, and mixed-use developments 
                    with full construction modeling.
                  </p>
                  <div style={styles.featureBenefit}>📊 IRR, DSCR, equity multiple</div>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>🎯</div>
                  <h3 style={styles.featureTitle}>Max Offer Price</h3>
                  <p style={styles.featureText}>
                    Never overpay again. Get specific max bid recommendations based on your 
                    return targets.
                  </p>
                  <div style={styles.featureBenefit}>💵 Save $50K+ per deal</div>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>📉</div>
                  <h3 style={styles.featureTitle}>Risk Assessment</h3>
                  <p style={styles.featureText}>
                    Sensitivity analysis, market comps, absorption rates, and red flag identification 
                    before you commit capital.
                  </p>
                  <div style={styles.featureBenefit}>🛡️ Avoid bad deals</div>
                </div>

                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>💼</div>
                  <h3 style={styles.featureTitle}>Institutional Metrics</h3>
                  <p style={styles.featureText}>
                    Cap rate, IRR, cash-on-cash, DSCR, break-even occupancy, equity multiple—
                    all calculated automatically.
                  </p>
                  <div style={styles.featureBenefit}>🏆 Investor-grade analysis</div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section style={styles.pricing} id="pricing">
              <h2 style={styles.sectionTitle}>Simple Pricing That Scales With You</h2>
              <div style={styles.pricingGrid}>
                <div style={styles.pricingCard}>
                  <div style={styles.pricingBadge}>FREE</div>
                  <h3 style={styles.pricingTitle}>Starter</h3>
                  <div style={styles.price}>
                    <span style={styles.priceAmount}>$0</span>
                    <span style={styles.pricePeriod}>/month</span>
                  </div>
                  <ul style={styles.pricingFeatures}>
                    <li>✓ 3 analyses per month</li>
                    <li>✓ Residential rental analysis</li>
                    <li>✓ Basic financial metrics</li>
                    <li>✓ Email support</li>
                    <li style={styles.disabledFeature}>✗ Commercial pro formas</li>
                    <li style={styles.disabledFeature}>✗ Save analysis history</li>
                    <li style={styles.disabledFeature}>✗ PDF exports</li>
                  </ul>
                  <Link href="/analyzer">
                    <a style={styles.pricingButton}>Start Free</a>
                  </Link>
                </div>

                <div style={{...styles.pricingCard, ...styles.pricingCardFeatured}}>
                  <div style={styles.pricingBadgePopular}>MOST POPULAR</div>
                  <h3 style={styles.pricingTitle}>Pro</h3>
                  <div style={styles.price}>
                    <span style={styles.priceAmount}>$49</span>
                    <span style={styles.pricePeriod}>/month</span>
                  </div>
                  <ul style={styles.pricingFeatures}>
                    <li>✓ Unlimited residential analyses</li>
                    <li>✓ 10 commercial pro formas/month</li>
                    <li>✓ Advanced financial metrics</li>
                    <li>✓ Save analysis history</li>
                    <li>✓ Export to PDF</li>
                    <li>✓ Priority support</li>
                    <li>✓ Max offer calculator</li>
                  </ul>
                  <Link href="/analyzer">
                    <a style={styles.pricingButtonPrimary}>Start Pro Trial</a>
                  </Link>
                </div>

                <div style={styles.pricingCard}>
                  <div style={styles.pricingBadge}>DEVELOPER</div>
                  <h3 style={styles.pricingTitle}>Developer</h3>
                  <div style={styles.price}>
                    <span style={styles.priceAmount}>$199</span>
                    <span style={styles.pricePeriod}>/month</span>
                  </div>
                  <ul style={styles.pricingFeatures}>
                    <li>✓ Everything in Pro</li>
                    <li>✓ Unlimited commercial pro formas</li>
                    <li>✓ White-label reports</li>
                    <li>✓ API access</li>
                    <li>✓ Custom assumptions</li>
                    <li>✓ Dedicated support</li>
                    <li>✓ Multi-user team access</li>
                  </ul>
                  <a href="#contact" style={styles.pricingButton}>Contact Sales</a>
                </div>
              </div>
            </section>

            {/* About/Founder Section */}
            <section style={styles.about} id="about">
              <div style={styles.aboutContent}>
                <div style={styles.aboutText}>
                  <h2 style={styles.aboutTitle}>Built by a Developer Who Got Tired of Excel</h2>
                  <p style={styles.aboutParagraph}>
                    I'm a real estate developer with years in construction and finance. I got tired 
                    of spending entire weekends in spreadsheets, second-guessing my numbers, and 
                    losing deals to investors who moved faster.
                  </p>
                  <p style={styles.aboutParagraph}>
                    So I built CapFlow—the tool I wish I had when I started. The same analysis that 
                    consultants charge $2,500 for, you get in 5 minutes for pennies.
                  </p>
                  <p style={styles.aboutParagraph}>
                    Now I analyze 20+ deals per week in the time it used to take me to analyze one. 
                    And I'm sharing it with you.
                  </p>
                  <div style={styles.aboutSignature}>
                    <div style={styles.signatureName}>Parker Cockrell</div>
                    <div style={styles.signatureTitle}>Founder, CapFlow</div>
                  </div>
                </div>
                <div style={styles.aboutImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" 
                    alt="Real estate development"
                    style={styles.aboutPhoto}
                  />
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section style={styles.finalCTA}>
              <h2 style={styles.finalCTATitle}>Ready to Analyze Your First Deal?</h2>
              <p style={styles.finalCTAText}>
                Join real estate professionals who are making faster, smarter investment decisions.
              </p>
              <Link href="/analyzer">
                <a style={styles.finalCTAButton}>
                  Launch CapFlow Free
                  <span style={styles.buttonArrow}>→</span>
                </a>
              </Link>
              <p style={styles.finalCTAFootnote}>No credit card required • 3 free analyses</p>
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
                <h4 style={styles.footerColumnTitle}>Product</h4>
                <a href="#features" style={styles.footerLink}>Features</a>
                <a href="#pricing" style={styles.footerLink}>Pricing</a>
                <Link href="/analyzer"><a style={styles.footerLink}>Analyzer</a></Link>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Company</h4>
                <a href="#about" style={styles.footerLink}>About</a>
                <a href="#contact" style={styles.footerLink}>Contact</a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>
              © 2026 CapFlow. Built with Claude.
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
  
  // Top Navigation
  topNav: {
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
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
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    color: '#64748b',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '15px',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  ctaButton: {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'transform 0.2s',
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
    borderRight: '1px solid #e5e7eb',
    background: '#f9fafb',
  },
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sidebarTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '8px',
  },
  sidebarButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    border: '1px solid #e5e7eb',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  sidebarIcon: {
    fontSize: '24px',
  },
  sidebarButtonTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827',
  },
  sidebarButtonDesc: {
    fontSize: '12px',
    color: '#64748b',
  },
  sidebarDivider: {
    height: '1px',
    background: '#e5e7eb',
    margin: '16px 0',
  },
  sidebarStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sidebarStat: {
    textAlign: 'center',
  },
  sidebarStatNumber: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0ea5e9',
  },
  sidebarStatLabel: {
    fontSize: '12px',
    color: '#64748b',
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
    display: 'inline-block',
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
    borderRadius: '20px',
    marginBottom: '24px',
  },
  badgeText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2563eb',
  },
  heroTitle: {
    fontSize: '52px',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#111827',
  },
  heroGradient: {
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#64748b',
    marginBottom: '32px',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
  },
  primaryButton: {
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    color: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 20px rgba(14, 165, 233, 0.4)',
    cursor: 'pointer',
  },
  secondaryButton: {
    padding: '16px 32px',
    background: 'white',
    color: '#0ea5e9',
    border: '2px solid #0ea5e9',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
  },
  buttonArrow: {
    fontSize: '18px',
  },
  socialProof: {
    padding: '24px',
    background: '#f9fafb',
    borderRadius: '12px',
    borderLeft: '4px solid #0ea5e9',
  },
  testimonial: {},
  quote: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#374151',
    marginBottom: '8px',
  },
  author: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '600',
  },
  
  // Hero Image
  heroImage: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  },
  floatingCard: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    minWidth: '200px',
  },
  floatingCardTitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  metric: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  metricLabel: {
    fontSize: '14px',
    color: '#64748b',
  },
  metricValue: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#0ea5e9',
  },
  recommendation: {
    marginTop: '12px',
    padding: '8px',
    background: '#dcfce7',
    color: '#16a34a',
    borderRadius: '6px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '700',
  },
  
  // Pain Points
  painPoints: {
    marginBottom: '100px',
  },
  sectionTitle: {
    fontSize: '42px',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '16px',
    color: '#111827',
  },
  sectionSubtitle: {
    fontSize: '20px',
    textAlign: 'center',
    color: '#64748b',
    marginBottom: '60px',
  },
  painGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '40px',
  },
  painCard: {
    padding: '24px',
    background: '#fef2f2',
    borderRadius: '12px',
    border: '2px solid #fee2e2',
  },
  painIcon: {
    fontSize: '32px',
    display: 'block',
    marginBottom: '12px',
  },
  painTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#dc2626',
    marginBottom: '8px',
  },
  painText: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.6',
  },
  painSolution: {
    textAlign: 'center',
    padding: '32px',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    borderRadius: '16px',
  },
  painSolutionText: {
    fontSize: '28px',
    fontWeight: '800',
    color: 'white',
    margin: 0,
  },
  
  // Features
  features: {
    marginBottom: '100px',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  featureCard: {
    padding: '32px',
    background: 'white',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    transition: 'all 0.2s',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#111827',
  },
  featureText: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#64748b',
    marginBottom: '16px',
  },
  featureBenefit: {
    padding: '8px 12px',
    background: '#dbeafe',
    color: '#2563eb',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block',
  },
  
  // Pricing
  pricing: {
    marginBottom: '100px',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  pricingCard: {
    padding: '40px',
    background: 'white',
    borderRadius: '16px',
    border: '2px solid #e5e7eb',
    position: 'relative',
  },
  pricingCardFeatured: {
    border: '2px solid #0ea5e9',
    boxShadow: '0 10px 40px rgba(14, 165, 233, 0.2)',
  },
  pricingBadge: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '16px',
  },
  pricingBadgePopular: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#0ea5e9',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '16px',
  },
  pricingTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '16px',
  },
  price: {
    marginBottom: '32px',
  },
  priceAmount: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#111827',
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
    color: '#374151',
  },
  disabledFeature: {
    color: '#cbd5e1',
  },
  pricingButton: {
    display: 'block',
    width: '100%',
    padding: '14px',
    background: 'white',
    color: '#0ea5e9',
    border: '2px solid #0ea5e9',
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
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    textAlign: 'center',
    cursor: 'pointer',
  },
  
  // About
  about: {
    marginBottom: '100px',
    padding: '60px',
    background: '#f9fafb',
    borderRadius: '24px',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  aboutText: {},
  aboutTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '24px',
  },
  aboutParagraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#64748b',
    marginBottom: '20px',
  },
  aboutSignature: {
    marginTop: '32px',
  },
  signatureName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
  },
  signatureTitle: {
    fontSize: '16px',
    color: '#64748b',
  },
  aboutImage: {},
  aboutPhoto: {
    width: '100%',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
  
  // Final CTA
  finalCTA: {
    textAlign: 'center',
    padding: '80px 60px',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    borderRadius: '24px',
    marginBottom: '60px',
  },
  finalCTATitle: {
    fontSize: '42px',
    fontWeight: '800',
    color: 'white',
    marginBottom: '16px',
  },
  finalCTAText: {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '32px',
  },
  finalCTAButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '18px 36px',
    background: 'white',
    color: '#0ea5e9',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '18px',
    cursor: 'pointer',
  },
  finalCTAFootnote: {
    marginTop: '16px',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  
  // Footer
  footer: {
    padding: '60px 60px 40px',
    background: '#111827',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '60px',
    marginBottom: '40px',
  },
  footerBrand: {},
  footerTagline: {
    color: '#9ca3af',
    fontSize: '16px',
    marginTop: '12px',
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
  footerColumnTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '8px',
  },
  footerLink: {
    fontSize: '14px',
    color: '#9ca3af',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  footerBottom: {
    paddingTop: '32px',
    borderTop: '1px solid #374151',
    textAlign: 'center',
  },
  footerCopyright: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0,
  },
}
