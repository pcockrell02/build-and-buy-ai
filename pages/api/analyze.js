javascriptimport Anthropic from '@anthropic-ai/sdk'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { address, price, bedrooms, bathrooms, sqft } = req.body

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  })

  const prompt = `You are an expert real estate investment analyst. Analyze this property and provide clear, actionable insights.

**Property Details:**
- Address: ${address}
- Asking Price: $${parseInt(price).toLocaleString()}
- Bedrooms: ${bedrooms}
- Bathrooms: ${bathrooms}
- Square Feet: ${sqft}

**Your Analysis Should Include:**

1. **Estimated Monthly Rent**
   - Based on market comparables for similar properties
   - Provide a realistic range

2. **Financial Metrics** (Assume: 20% down, 7% interest rate, 30-year mortgage)
   - Monthly mortgage payment (P&I)
   - Estimated monthly expenses (property tax, insurance, maintenance, vacancy - use 50% rule)
   - Monthly cash flow (rent minus all expenses)
   - Cash-on-cash return percentage
   - Cap rate

3. **Deal Recommendation**
   - Clear BUY or PASS verdict
   - Confidence level (High/Medium/Low)
   - Maximum price you'd recommend offering

4. **Key Considerations**
   - 2-3 sentences on risks or opportunities
   - Market context if relevant

Format your response with clear headers and be specific with numbers.`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2500,
      messages: [
        { role: 'user', content: prompt }
      ]
    })

    res.status(200).json({ 
      analysis: message.content[0].text 
    })
  } catch (error) {
    console.error('API Error:', error)
    res.status(500).json({ 
      error: 'Failed to analyze property. Please check your API key.' 
    })
  }
}
```

4. Commit changes

---

## ✅ **Verify Your Structure**

After creating all files, your repository should look like this:
```
build-and-buy-ai/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── pages/
    ├── index.js
    └── api/
        └── analyze.js
