export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-black)] via-[var(--color-dark-grey)] to-[var(--color-yellow)] text-[var(--color-yellow)]">
        <div className="max-w-4xl mx-auto shadow-lg rounded-xl bg-black/80 p-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="mb-6 text-xl">We’re ready to serve your fuel and lubricant needs.</p>
          <div className="mb-8">
            <p>📍 <span className="font-semibold">Address:</span> 318 Zone B, Park Ave, Lulekani, 1392</p>
            <p>📞 <span className="font-semibold">Phone:</span> 065 966 4121</p>
            <p>📧 <span className="font-semibold">Email:</span> <a href="mailto:admin@bilacorepetroleums.com" className="underline text-[var(--color-yellow)]">admin@bilacorepetroleums.co.za</a></p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Name" className="px-6 py-3 rounded bg-[var(--color-white)] text-[var(--color-black)] text-lg" required />
            <input type="email" placeholder="Email" className="px-6 py-3 rounded bg-[var(--color-white)] text-[var(--color-black)] text-lg" required />
            <input type="tel" placeholder="Phone" className="px-6 py-3 rounded bg-[var(--color-white)] text-[var(--color-black)] text-lg" required />
            <textarea placeholder="Message" className="px-6 py-3 rounded bg-[var(--color-white)] text-[var(--color-black)] text-lg" rows={4} required />
            <button type="submit" className="bg-[var(--color-yellow)] text-[var(--color-black)] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
