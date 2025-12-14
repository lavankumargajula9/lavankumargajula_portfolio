export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">Senior Data Engineer with 4+ years of experience building scalable data platforms on AWS.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">My Story</h2>
        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
          <p>I started my career in data analytics and quickly discovered my passion for building robust, scalable data infrastructure. What began as SQL queries evolved into designing comprehensive ETL pipelines processing petabytes of data daily.</p>
          <p>At <strong>Lara Design</strong>, I architected a marketing data warehouse integrating 50+ data sources, supporting 100+ monthly analytics requests with sub-500ms query latency and 99.9% uptime.</p>
          <p>At <strong>Manotech</strong>, as the first data hire, I built the entire data infrastructure from scratch. I unified 15+ disparate data sources into a single analytics platform, enabling insights that identified $2M+ in business opportunities.</p>
          <p>At <strong>Infosys</strong>, I processed 5TB+ of daily data across healthcare and financial sectors, building 25+ production pipelines with 99.9% uptime while collaborating with 50+ stakeholders.</p>
          <p>Beyond engineering, I'm passionate about mentoring, optimizing queries (30-40% improvements), and integrating LLMs into data workflows.</p>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold">Master's in Data Science & Analytics</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">New England College | GPA: 3.8/4.0</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold">Bachelor's in Computer Science Engineering</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">India</p>
            </div>
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
