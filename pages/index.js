import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [dealType, setDealType] = useState('residential') // 'residential' or 'commercial'
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
        <title>Build & Buy AI - Property Analyzer</title>
        <meta name="description" content="AI-powered real estate deal analyzer" />
      </Head>

      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>🏠 Build & Buy AI</h1>
          <p style={styles.subtitle}>Analyze residential rentals and commercial development deals</p>

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
              {loading ? 'Analyzing...' : `Analyze ${dealType === 'residential' ? 'Rental' : 'Development'} 🔍`}
            </button>
          </form>

          {analysis && (
            <div style={styles.results}>
              <h2 style={styles.resultsTitle}>
                {dealType === 'residential' ? '📊 Rental Analysis' : '🏗️ Development Pro Forma'}
              </h2>
              <div style={styles.analysisText}>
                {analysis.split('\n').map((line, i) => (
                  <p key={i} style={{ margin: '8px 0' }}>{line}</p>
                ))}
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
    </>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  content: {
    maxWidth: '900px',
    margin: '40px auto',
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '18px',
    color: '#64748b',
    marginBottom: '30px',
    textAlign: 'center',
  },
  tabs: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    borderBottom: '2px solid #e2e8f0',
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
    color: '#667eea',
    borderBottom: '3px solid #667eea',
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
    color: '#334155',
    marginBottom: '8px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  },
  results: {
    marginTop: '30px',
    padding: '30px',
    background: '#f8fafc',
    borderRadius: '12px',
    border: '2px solid #e2e8f0',
  },
  resultsTitle: {
    fontSize: '24px',
    color: '#1e293b',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  analysisText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#334155',
    whiteSpace: 'pre-wrap',
  },
  footer: {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #e2e8f0',
  },
  footerText: {
    fontSize: '14px',
    color: '#64748b',
    textAlign: 'center',
    margin: 0,
  },
}
