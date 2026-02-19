import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    address: '123 Main St, Greenville, SC',
    price: '250000',
    bedrooms: '3',
    bathrooms: '2',
    sqft: '1500'
  })
  const [analysis, setAnalysis] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAnalysis('')

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      setAnalysis(data.analysis)
    } catch (error) {
      setAnalysis('Error analyzing property. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
          <p style={styles.subtitle}>Analyze rental property deals with AI</p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Property Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Asking Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
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
                  value={formData.bedrooms}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Square Feet</label>
                <input
                  type="number"
                  name="sqft"
                  value={formData.sqft}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.button,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze Deal 🔍'}
            </button>
          </form>

          {analysis && (
            <div style={styles.results}>
              <h2 style={styles.resultsTitle}>📊 Analysis Results</h2>
              <div style={styles.analysisText}>
                {analysis.split('\n').map((line, i) => (
                  <p key={i} style={{ margin: '8px 0' }}>{line}</p>
                ))}
              </div>
            </div>
          )}

          <div style={styles.footer}>
            <p style={styles.footerText}>
              💡 Assumptions: 20% down, 7% interest, 30yr mortgage, 50% expense rule
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
    maxWidth: '800px',
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
    marginBottom: '40px',
    textAlign: 'center',
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
