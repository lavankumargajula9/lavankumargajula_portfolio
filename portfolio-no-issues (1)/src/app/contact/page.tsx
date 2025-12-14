'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || ''
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || ''
    const subject = (form.querySelector('[name="subject"]') as HTMLInputElement)?.value || ''
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || ''
    
    const mailto = `mailto:lavankumargajula9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">Have a project in mind? Let's discuss data engineering opportunities.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:lavankumargajula9@gmail.com" className="text-blue-500 break-all">lavankumargajula9@gmail.com</a>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <a href="tel:+17188777577" className="text-blue-500">(718) 877-7577</a>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-slate-700 dark:text-slate-300">Jersey City, New Jersey, USA</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://github.com" className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-semibold">GitHub</a>
                  <a href="https://linkedin.com" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            {submitted && <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">✓ Opening email...</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your name" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 focus:outline-none focus:border-blue-500" />
              <input type="email" name="email" placeholder="your@email.com" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 focus:outline-none focus:border-blue-500" />
              <input type="text" name="subject" placeholder="Subject" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 focus:outline-none focus:border-blue-500" />
              <textarea name="message" placeholder="Your message..." rows={5} required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 focus:outline-none focus:border-blue-500"></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Lavan Kumar Gajula. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
