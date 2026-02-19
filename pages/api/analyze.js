import Anthropic from '@anthropic-ai/sdk'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const data = req.body
  const { dealType } = data

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  })

  let prompt = ''

  if (dealType === 'residential') {
    // RESIDENTIAL ANALYSIS PROMPT
    const { address, price, bedrooms, bathrooms, sqft } = data
    
    prompt = `You are an expert real estate investment analyst. Analyze this residential rental property:

**Property Details:**
- Address: ${address}
- Asking Price: $${parseInt(price).toLocaleString()}
- Bedrooms: ${bedrooms}
- Bathrooms: ${bathrooms}
- Square Feet: ${sqft}

**Your Analysis Should Include:**

1. **Estimated Monthly Rent**
   - Based on market comparables
   - Realistic range

2. **Financial Metrics** (20% down, 7% interest, 30-year mortgage)
   - Monthly mortgage payment (P&I)
   - Estimated monthly expenses (50% rule)
   - Monthly cash flow
   - Cash-on-cash return %
   - Cap rate

3. **Deal Recommendation**
   - Clear BUY or PASS verdict
   - Confidence level
   - Maximum offer price

4. **Key Considerations**
   - Risks and opportunities

Format with clear headers and specific numbers.`
    
  } else {
    // COMMERCIAL DEVELOPMENT ANALYSIS PROMPT
    const {
      address,
      landPrice,
      landSize,
      zoning,
      developmentType,
      units,
      avgUnitSize,
      constructionCostPerSqft,
      projectedRentPerUnit,
      vacancyRate,
      opexPercentage
    } = data

    const totalSqft = parseInt(units) * parseInt(avgUnitSize)
    const totalConstructionCost = totalSqft * parseInt(constructionCostPerSqft)
    const totalProjectCost = parseInt(landPrice) + totalConstructionCost

    prompt = `You are an expert commercial real estate development analyst. Analyze this development opportunity and create a comprehensive pro forma:

**Property & Development Details:**
- Address: ${address}
- Land Price: $${parseInt(landPrice).toLocaleString()}
- Land Size: ${landSize} acres
- Zoning: ${zoning}
- Development Type: ${developmentType}
- Number of Units/Spaces: ${units}
- Average Unit/Space Size: ${parseInt(avgUnitSize).toLocaleString()} sqft
- Total Buildable Area: ${totalSqft.toLocaleString()} sqft
- Construction Cost: $${parseInt(constructionCostPerSqft)}/sqft
- Total Construction Cost: $${totalConstructionCost.toLocaleString()}
- **Total Project Cost: $${totalProjectCost.toLocaleString()}**

**Operating Assumptions:**
- Projected Rent per Unit: $${parseInt(projectedRentPerUnit).toLocaleString()}/month
- Vacancy Rate: ${vacancyRate}%
- Operating Expenses: ${opexPercentage}% of gross revenue

**Required Analysis:**

## 1. EXECUTIVE SUMMARY
- Development feasibility verdict (GO / NO-GO / PROCEED WITH CAUTION)
- Key value drivers
- Major risks

## 2. PRO FORMA FINANCIALS (Year 1)

**Revenue:**
- Gross Potential Rent (${units} units × $${projectedRentPerUnit}/mo × 12)
- Less: Vacancy Loss (${vacancyRate}%)
- **Effective Gross Income**

**Operating Expenses (${opexPercentage}% of EGI):**
- Property Management
- Maintenance & Repairs
- Property Taxes
- Insurance
- Utilities
- **Total Operating Expenses**

**Net Operating Income (NOI)**

## 3. KEY INVESTMENT METRICS

Calculate and explain:
- **Cap Rate** (NOI / Total Project Cost)
- **Cash-on-Cash Return** (assume 25% equity, 75% debt at 7% interest, 25-year amortization)
- **Debt Service Coverage Ratio (DSCR)** (NOI / Annual Debt Service)
- **Break-Even Occupancy Rate**
- **IRR** (10-year hold, 3% annual rent growth, 6% cap rate exit)
- **Equity Multiple** (10-year projection)

## 4. 10-YEAR PRO FORMA PROJECTION

Create a year-by-year table showing:
- Year 1-10
- Gross Rent (3% annual growth)
- Vacancy Loss
- Operating Expenses
- NOI
- Debt Service
- Cash Flow
- Cumulative Cash Flow

## 5. DEVELOPMENT TIMELINE & COSTS

Estimate:
- Site work & prep: (months + cost)
- Construction period: (months + cost)
- Lease-up period: (months)
- Stabilization timeline
- Total time to break-even

## 6. MARKET ANALYSIS

Assess:
- Demand for ${developmentType} in the area
- Competitive supply
- Rent comparables and trends
- Absorption rate expectations

## 7. RISK ANALYSIS

Identify and quantify:
- Construction cost overruns (sensitivity: +10%, +20%)
- Lease-up delays
- Market rent compression
- Interest rate risk
- Zoning/permitting risks

## 8. RECOMMENDATION

- **Maximum Land Price** (work backwards from target returns)
- **Required Rent** to hit 12% CoC and 1.25x DSCR
- **Alternative scenarios** (e.g., reduce units, change unit mix)
- **Exit strategy** options

Format with clear headers, tables where helpful, and specific dollar amounts. Be thorough and professional - this should be investor-grade analysis.`
  }

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000, // Increased for detailed pro forma
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
