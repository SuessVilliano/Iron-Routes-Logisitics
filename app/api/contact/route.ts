import { NextResponse } from 'next/server'

// ─── GHL WEBHOOK ─────────────────────────────────────────────────────────────
// Replace the URL below with your GoHighLevel webhook endpoint:
// const GHL_WEBHOOK_URL = 'YOUR_GHL_WEBHOOK_URL_HERE'
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
      company: 'Iron Routes Logistics LLC',
    }

    console.log('[Iron Routes] Form submission:', JSON.stringify(submission, null, 2))

    // TODO: Forward to GHL webhook:
    // await fetch(GHL_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submission),
    // })

    return NextResponse.json({ success: true, message: 'Request received' })
  } catch (err) {
    console.error('[Iron Routes] Form error:', err)
    return NextResponse.json({ success: false, message: 'Error processing request' }, { status: 500 })
  }
}
