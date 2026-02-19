import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Analyzer() {
  const [dealType, setDealType] = useState('residential')
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState('')
  const [analysisCount, setAnalysisCount] = useState(0)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  
  // Residential form data
  const [residentialData, setResidentialData] = useState({
    address: '123 Main St, Greenville, SC',
    price: '250000',
    bedrooms: '3',
    bathrooms: '2',
    sqft: '1500'
  })
  
  // Commercial form data
  const [commercialData, setCommercialData] = useState({
    address: '456 Commerce Blvd, Greenville, SC',
    landPrice: '500000',
    landSize: '2.5',
    zoning: 'C-2',
    developmentType: 'multifamily',
    units: '24',
    avgUnitSize: '900',
    constructionCostPerSqft: '150',
    projectedRentPerUnit: '1500',
    vacancyRate: '5',
    opexPercentage: '40'
  })

  // Load analysis count from localStorage on mount
  useEffect(() => {
    const count = parseInt(localStorage.getItem('capflow_analysis_count') || '0')
    const hasEmail = localStorage.getItem('capflow_user_email')
    setAnalysisCount(count)
    setEmailSubmitted(!!hasEmail)
  }, [])

  const handleResidentialChange = (e) => {
    setResidentialData({ ...residentialData, [e.target.name]: e.target.value })
  }

  const handleCommercialChange = (e) => {
    setCommercialData({ ...commercialData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if user has exceeded free analyses
    if (analysisCount >= 3 && !emailSubmitted) {
      setShowEmailModal(true)
      return
    }

    setLoading(true)
    setAnalysis('')

    const dataToSend = dealType === 'residential' 
      ? { ...residentialData, dealType: 'residential' }
      : { ...commercialData, dealType: 'commercial' }

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      })

      const data = await response.json()
      setAnalysis(data.analysis)
      
      // Increment analysis count
      const newCount = analysisCount + 1
      setAnalysisCount(newCount)
      localStorage.setItem('capflow_analysis_count', newCount.toString())
      
    } catch (error) {
      setAnalysis('Error analyzing property. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/capture-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: 'analyzer_limit' 
        })
      })

      if (response.ok) {
        localStorage.setItem('capflow_user_email', email)
        setEmailSubmitted(true)
        setShowEmailModal(false)
        // Allow them to continue with unlimited analyses after email
      }
    } catch (error) {
      console.error('Error capturing email:', error)
    }
  }

  const remainingAnalyses = emailSubmitted ? '∞' : Math.max(0, 3 - analysisCount)

  return (
    <>
      <Head>
        <title>Deal Analyzer - CapFlow</title>
        <meta name="description" content="Analyze rental properties and commercial developments with CapFlow" />
      </Head>

      <div style={styles.page}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <Link href="/">
              <a style={styles.logo}>
                <span style={styles.logoIcon}>📊</span>
                <span style={styles.logoText}>CapFlow</span>
              </a>
            </Link>
            <div style={styles.navRight}>
              {!emailSubmitted && (
                <div style={styles.analysisCounter}>
                  <span style={styles.counterLabel}>Free analyses remaining:</span>
                  <span style={styles.counterValue}>{remainingAnalyses}/3</span>
                </div>
              )}
              <Link href="/">
                <a style={styles.backButton}>← Home</a>
              </Link>
            </div>
          </div>
        </nav>

        {/* Email Capture Modal */}
        {showEmailModal && (
          <div style={styles.modalOverlay} onClick={() => setShowEmailModal(false)}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button style={styles.closeButton} onClick={() => setShowEmailModal(false)}>×</button>
              
              <div style={styles.modalIcon}>🚀</div>
              <h2 style={styles.modalTitle}>You've Used Your Free Analyses</h2>
              <p style={styles.modalText}>
                Continue analyzing unlimited deals by entering your email, 
                or upgrade to Pro for advanced features.
              </p>
              
              <form onSubmit={handleEmailSubmit} style={styles.emailForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.emailInput}
                  required
                />
                <button type="submit" style={styles.emailButton}>
                  Continue Free
                </button>
              </form>
              
              <div style={styles.modalDivider}>
                <span style={styles.dividerText}>or</span>
              </div>
              
              <Link href="/#pricing">
                <a style={styles.upgradeButton}>
                  Upgrade to Pro - $49/month
                </a>
              </Link>
              
              <p style={styles.modalFootnote}>
                Pro includes: Unlimited analyses, PDF exports, saved history, and more
              </p>
            </div>
          </div>
        )}

        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.header}>
              <h1 style={styles.title}>Deal Analyzer</h1>
              <p style={styles.subtitle}>Professional pro formas in 5 minutes</p>
            </div>

            {/* Deal Type Tabs */}
            <div style={styles.tabs}>
              <button
                onClick={() => setDealType('residential')}
                style={{
                  ...styles.tab,
                  ...(dealType === 'residential' ? styles.tabActive : {})
                }}
              >
                🏘️ Residential Rental
              </button>
              <button
                onClick={() => setDealType('commercial')}
                style={{
                  ...styles.tab,
                  ...(dealType === 'commercial' ? styles.tabActive : {})
                }}
              >
                🏢 Commercial Development
              </button>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              {dealType === 'residential' ? (
                // RESIDENTIAL FORM
                <>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Property Address</label>
                    <input
                      type="text"
                      name="address"
                      value={residentialData.address}
                      onChange={handleResidentialChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Asking Price ($)</label>
                    <input
                      type="number"
                      name="price"
                      value={residentialData.price}
                      onChange={handleResidentialChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.row}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Bedrooms</label>
                      <input
                        type="number"
                        name="bedrooms"
                        value={residentialData.bedrooms}
                        onChange={handleResidentialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Bathrooms</label>
                      <input
                        type="number"
                        name="bathrooms"
                        value={residentialData.bathrooms}
                        onChange={handleResidentialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Square Feet</label>
                      <input
                        type="number"
                        name="sqft"
                        value={residentialData.sqft}
                        onChange={handleResidentialChange}
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                // COMMERCIAL FORM
                <>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Property Address</label>
                    <input
                      type="text"
                      name="address"
                      value={commercialData.address}
                      onChange={handleCommercialChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.row}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Land Price ($)</label>
                      <input
                        type="number"
                        name="landPrice"
                        value={commercialData.landPrice}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Land Size (acres)</label>
                      <input
                        type="number"
                        step="0.1"
                        name="landSize"
                        value={commercialData.landSize}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Zoning</label>
                      <input
                        type="text"
                        name="zoning"
                        value={commercialData.zoning}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        placeholder="e.g., C-2, MU-1"
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Development Type</label>
                    <select
                      name="developmentType"
                      value={commercialData.developmentType}
                      onChange={handleCommercialChange}
                      style={styles.input}
                      required
                    >
                      <option value="multifamily">Multifamily Apartment</option>
                      <option value="retail">Retail Center</option>
                      <option value="office">Office Building</option>
                      <option value="mixed-use">Mixed-Use Development</option>
                      <option value="industrial">Industrial/Warehouse</option>
                    </select>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Number of Units/Spaces</label>
                      <input
                        type="number"
                        name="units"
                        value={commercialData.units}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Avg Unit/Space Size (sqft)</label>
                      <input
                        type="number"
                        name="avgUnitSize"
                        value={commercialData.avgUnitSize}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Construction Cost ($/sqft)</label>
                      <input
                        type="number"
                        name="constructionCostPerSqft"
                        value={commercialData.constructionCostPerSqft}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Projected Rent per Unit ($)</label>
                      <input
                        type="number"
                        name="projectedRentPerUnit"
                        value={commercialData.projectedRentPerUnit}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Vacancy Rate (%)</label>
                      <input
                        type="number"
                        name="vacancyRate"
                        value={commercialData.vacancyRate}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        step="0.1"
                        required
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Operating Expenses (%)</label>
                      <input
                        type="number"
                        name="opexPercentage"
                        value={commercialData.opexPercentage}
                        onChange={handleCommercialChange}
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <button 
                type="submit" 
                style={{
                  ...styles.button,
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
                disabled={loading}
              >
                {loading ? '⏳ Analyzing...' : `🔍 Analyze ${dealType === 'residential' ? 'Rental' : 'Development'}`}
              </button>
            </form>

            {analysis && (
              <div style={styles.results}>
                <div style={styles.resultsHeader}>
                  <h2 style={styles.resultsTitle}>
                    {dealType === 'residential' ? '📊 Investment Analysis' : '🏗️ Development Pro Forma'}
                  </h2>
                  <div style={styles.poweredBy}>Powered by CapFlow</div>
                </div>
                <div style={styles.analysisText}>
                  {analysis.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h3 key={i} style={styles.analysisHeader}>{line.replace('## ', '')}</h3>
                    }
                    if (line.includes('**')) {
                      const parts = line.split('**')
                      return (
                        <p key={i} style={styles.analysisParagraph}>
                          {parts.map((part, j) => 
                            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                          )}
                        </p>
                      )
                    }
                    return line ? <p key={i} style={styles.analysisParagraph}>{line}</p> : <br key={i} />
                  })}
                </div>
                
                {/* PDF Export CTA */}
                <div style={styles.exportSection}>
                  <button style={styles.exportButtonDisabled} disabled>
                    📄 Download PDF Report (Pro Feature)
                  </button>
                  <p style={styles.exportNote}>
                    Upgrade to Pro to download professional PDF reports
                  </p>
                </div>
              </div>
            )}

            <div style={styles.footer}>
              <p style={styles.footerText}>
                {dealType === 'residential' 
                  ? '💡 Assumptions: 20% down, 7% interest, 30yr mortgage, 50% expense rule'
                  : '💡 Pro forma includes 10-year projections, cap rate, IRR, DSCR, and feasibility analysis'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0f172a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#e2e8f0',
  },
  
  // Navigation
  nav: {
    position: 'sticky',
    top: 0,
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
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
    textDecoration: 'none',
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
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  analysisCounter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '20px',
  },
  counterLabel: {
    fontSize: '13px',
    color: '#94a3b8',
  },
  counterValue: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#06b6d4',
  },
  backButton: {
    padding: '10px 20px',
    color: '#06b6d4',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
  },
  
  // Modal
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '20px',
  },
  modal: {
    background: '#1e293b',
    borderRadius: '24px',
    padding: '48px',
    maxWidth: '500px',
    width: '100%',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    boxShadow: '0 0 60px rgba(6, 182, 212, 0.2)',
    position: 'relative',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    fontSize: '32px',
    cursor: 'pointer',
    lineHeight: '1',
  },
  modalIcon: {
    fontSize: '64px',
    marginBottom: '24px',
  },
  modalTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#f1f5f9',
    marginBottom: '16px',
  },
  modalText: {
    fontSize: '16px',
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  emailForm: {
    marginBottom: '24px',
  },
  emailInput: {
    width: '100%',
    padding: '16px',
    background: 'rgba(51, 65, 85, 0.5)',
    border: '2px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '12px',
    color: '#e2e8f0',
    fontSize: '16px',
    marginBottom: '16px',
    boxSizing: 'border-box',
    outline: 'none',
  },
  emailButton: {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
  },
  modalDivider: {
    position: 'relative',
    textAlign: 'center',
    margin: '24px 0',
  },
  dividerText: {
    background: '#1e293b',
    padding: '0 16px',
    color: '#64748b',
    fontSize: '14px',
    position: 'relative',
    zIndex: 1,
  },
  upgradeButton: {
    display: 'block',
    width: '100%',
    padding: '16px',
    background: 'transparent',
    color: '#06b6d4',
    border: '2px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  modalFootnote: {
    marginTop: '16px',
    fontSize: '13px',
    color: '#64748b',
  },
  
  // Main Content
  container: {
    padding: '40px 20px',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#94a3b8',
  },
  tabs: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    borderBottom: '2px solid rgba(148, 163, 184, 0.1)',
  },
  tab: {
    flex: 1,
    padding: '15px',
    background: 'transparent',
    border: 'none',
    borderBottom: '3px solid transparent',
    fontSize: '16px',
    fontWeight: '600',
    color: '#64748b',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  tabActive: {
    color: '#06b6d4',
    borderBottom: '3px solid #06b6d4',
  },
  form: {
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
    flex: '1',
  },
  row: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: '8px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(51, 65, 85, 0.5)',
    border: '2px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '8px',
    color: '#e2e8f0',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    outline: 'none',
    fontFamily: 'inherit',
  },
  button: {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
  },
  results: {
    marginTop: '40px',
    padding: '30px',
    background: 'rgba(51, 65, 85, 0.3)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  resultsHeader: {
    borderBottom: '2px solid rgba(148, 163, 184, 0.1)',
    paddingBottom: '16px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: '24px',
    color: '#f1f5f9',
    fontWeight: 'bold',
    margin: 0,
  },
  poweredBy: {
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '600',
  },
  analysisText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#e2e8f0',
  },
  analysisHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginTop: '24px',
    marginBottom: '12px',
  },
  analysisParagraph: {
    margin: '8px 0',
    color: '#cbd5e1',
  },
  exportSection: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    textAlign: 'center',
  },
  exportButtonDisabled: {
    padding: '14px 24px',
    background: 'rgba(100, 116, 139, 0.2)',
    color: '#64748b',
    border: '2px solid rgba(100, 116, 139, 0.3)',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'not-allowed',
    marginBottom: '8px',
  },
  exportNote: {
    fontSize: '13px',
    color: '#64748b',
    margin: 0,
  },
  footer: {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
  footerText: {
    fontSize: '14px',
    color: '#64748b',
    textAlign: 'center',
    margin: 0,
  },
}
