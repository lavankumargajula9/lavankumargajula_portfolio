export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Scaling Data. Driving Insights.</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Senior Data Engineer | AWS Specialist</p>
          <p className="text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">
            4+ years building scalable data warehouses, ETL pipelines, and analytics platforms that drive million-dollar business decisions.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <a href="/projects" className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold">View Projects</a>
            <a href="/experience" className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 font-semibold">Experience</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '4+', text: 'Years Experience' },
              { num: '50+', text: 'Data Sources' },
              { num: '$2M+', text: 'Business Impact' },
              { num: '99.9%', text: 'Uptime' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-4xl font-bold text-blue-500">{stat.num}</div>
                <p className="text-slate-600 dark:text-slate-300">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Core Skills</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {['AWS Redshift', 'ETL/ELT', 'SQL', 'Python', 'Data Modeling', 'Snowflake', 'Apache Spark', 'PostgreSQL'].map((s) => (
              <span key={s} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">{s}</span>
            ))}
          </div>
          <a href="/skills" className="text-blue-500 hover:text-blue-600 font-semibold">View all skills →</a>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Talk Data</h2>
          <p className="text-xl mb-8 opacity-90">Building data warehouses, optimizing pipelines, or mentoring teams</p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-white text-blue-500 rounded-lg hover:bg-slate-100 font-semibold">Contact Me</a>
            <a href="/about" className="px-8 py-3 border-2 border-white rounded-lg hover:bg-blue-600 font-semibold">About Me</a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Lavan Kumar Gajula. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="hover:text-blue-400">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-blue-400">LinkedIn</a>
            <a href="mailto:lavankumargajula9@gmail.com" className="hover:text-blue-400">Email</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
