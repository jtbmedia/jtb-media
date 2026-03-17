import React from 'react'

export const metadata = {
  title: 'Contact — JTB Media',
  description: 'Neem contact op met JTB Media via WhatsApp, e-mail of maak een afspraak.',
}

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', color: '#111', background: '#fff' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32 }}>Contact</h1>

      <div
        style={{
          background: '#e8f4fd',
          border: '1px solid #c5e0f5',
          borderRadius: 8,
          padding: '16px 20px',
          fontSize: 15,
          lineHeight: '1.6',
          color: '#1a1a1a',
        }}
      >
        <strong>Tip:</strong> Wij reageren het snelst op WhatsApp en e-mail. Wilt u langskomen in
        onze winkel in Ruinerwold? Maak dan eerst een afspraak — wij zijn niet altijd aanwezig.
        Onze winkel is goed bereikbaar vanuit Meppel, Steenwijk en omliggende dorpen.
      </div>
    </div>
  )
}
