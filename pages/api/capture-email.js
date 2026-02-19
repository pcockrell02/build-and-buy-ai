// Simple in-memory storage for now (you'll want a real database later)
// For MVP, we'll just log emails - you can upgrade to Supabase/Firebase later

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, source } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  // Log the email (you'll see this in Vercel logs)
  console.log('📧 New Email Capture:', {
    email,
    source: source || 'analyzer',
    timestamp: new Date().toISOString()
  })

  // TODO: Store in database
  // For now, we're just logging. Next step: Add Supabase/Airtable integration

  // Send success response
  res.status(200).json({ 
    success: true,
    message: 'Email captured successfully'
  })
}
