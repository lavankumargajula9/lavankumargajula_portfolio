export default function Projects() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Featured Projects</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">Production systems serving millions of requests and processing petabytes of data</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        {[
          {
            title: 'Marketing Data Warehouse Platform',
            company: 'Lara Design',
            period: 'Dec 2024 - Present',
            desc: 'Architected warehouse integrating 50+ data sources, supporting 100+ monthly analytics requests with <500ms latency and 99.9% uptime.',
            impact: ['100+ monthly queries', '50+ sources integrated', '99.9% uptime', '<500ms latency'],
            tech: ['AWS Redshift', 'AWS Glue', 'Lambda', 'Python', 'SQL', 'Airflow']
          },
          {
            title: 'Customer Analytics Platform',
            company: 'Manotech',
            period: 'Aug 2020 - Jul 2021',
            desc: 'Unified 15+ disparate data sources into single analytics platform, identifying $2M+ in business opportunities.',
            impact: ['$2M+ insights', '15+ sources unified', '60% faster reporting', '99.95% reliability'],
            tech: ['ETL/ELT', 'PostgreSQL', 'Redshift', 'Apache Spark', 'Python']
          },
          {
            title: 'Real-Time Data Pipeline',
            company: 'Multiple',
            period: 'Ongoing',
            desc: '4,800x latency improvement: 24hr → 5min. Processing 1M+ events daily with 99.95% delivery guarantee.',
            impact: ['1M+ events/day', '4,800x faster', '99.95% delivery', '5TB+ monthly'],
            tech: ['AWS Kinesis', 'Lambda', 'Redshift', 'Python', 'CloudWatch']
          }
        ].map((p, i) => (
          <div key={i} className="mb-12 bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-blue-500 font-semibold mb-1">{p.company} • {p.period}</p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">{p.desc}</p>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Key Achievements:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {p.impact.map((item, j) => <li key={j} className="flex"><span className="text-green-500 mr-2">✓</span>{item}</li>)}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm rounded-full">{t}</span>)}
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Lavan Kumar Gajula. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
