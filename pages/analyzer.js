import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Analyzer() {
  const [dealType, setDealType] = useState('residential')
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState('')
  
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

  const handleResidentialChange = (e) => {
    setResidentialData({ ...residentialData, [e.target.name]: e.target.value })
  }

  const handleCommercialChange = (e) => {
    setCommercialData({ ...commercialData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
    } catch (error) {
      setAnalysis('Error analyzing property. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
              <span style={styles.navTagline}>Where capital meets cash flow</span>
              <Link href="/">
                <a style={styles.backButton}>← Back to Home</a>
              </Link>
            </div>
          </div>
        </nav>

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
                    // Handle headers (lines starting with ##)
                    if (line.startsWith('## ')) {
                      return <h3 key={i} style={styles.analysisHeader}>{line.replace('## ', '')}</h3>
                    }
                    // Handle bold text (**text**)
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
                    // Regular lines
                    return line ? <p key={i} style={styles.analysisParagraph}>{line}</p> : <br key={i} />
                  })}
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
    background: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  
  // Navigation
  nav: {
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.98)',
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
    textDecoration: 'none',
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
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navTagline: {
    fontSize: '14px',
    color: '#64748b',
    fontStyle: 'italic',
  },
  backButton: {
    padding: '10px 20px',
    color: '#0ea5e9',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  
  container: {
    padding: '40px 20px',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#64748b',
  },
  tabs: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    borderBottom: '2px solid #e5e7eb',
  },
  tab: {
    flex: 1,
    padding: '15px',
    background: 'transparent',
    border: 'none',
    borderBottom: '3px solid transparent',
    fontSize: '16px',
    fontWeight: '600',
    color: '#6b7280',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  tabActive: {
    color: '#0ea5e9',
    borderBottom: '3px solid #0ea5e9',
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
    color: '#374151',
    marginBottom: '8px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    outline: 'none',
    fontFamily: 'inherit',
  },
  button: {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)',
  },
  results: {
    marginTop: '40px',
    padding: '30px',
    background: '#f9fafb',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
  },
  resultsHeader: {
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '16px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: '24px',
    color: '#111827',
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
    color: '#374151',
  },
  analysisHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    marginTop: '24px',
    marginBottom: '12px',
  },
  analysisParagraph: {
    margin: '8px 0',
  },
  footer: {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #e5e7eb',
  },
  footerText: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
    margin: 0,
  },
}
