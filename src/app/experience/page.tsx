export default function Experience() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">4+ years building scalable data systems</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        {[
          {
            role: 'Senior Data Engineer',
            company: 'Lara Design',
            location: 'New York, NY',
            period: 'Dec 2024 - Present',
            desc: 'Leading data warehouse architecture and analytics infrastructure',
            points: [
              'Architected marketing data warehouse integrating 50+ data sources',
              'Support 100+ analytics requests monthly with <500ms query latency',
              'Maintain 99.9% pipeline uptime across all data operations',
              'Mentored junior engineers on ETL best practices'
            ]
          },
          {
            role: 'Data Engineer (First Hire)',
            company: 'Manotech',
            location: 'Bangalore, India',
            period: 'Aug 2020 - Jul 2021',
            desc: 'Built data infrastructure from scratch for growth-stage startup',
            points: [
              'Designed and implemented ETL/ELT pipeline from zero to production',
              'Unified 15+ disparate data sources into single analytics platform',
              'Identified $2M+ in business insights through advanced analytics',
              'Achieved 99.95% data delivery reliability'
            ]
          },
          {
            role: 'Data Analyst',
            company: 'Infosys',
            location: 'Bangalore, India',
            period: 'Jul 2022 - Dec 2023',
            desc: 'Analytics and BI solutions for healthcare and financial sectors',
            points: [
              'Built and maintained 25+ production data pipelines',
              'Processed 5TB+ of daily data with 99.9% uptime',
              'Collaborated with 50+ stakeholders across healthcare and finance',
              'Improved query performance by 30-40% through optimization'
            ]
          }
        ].map((exp, i) => (
          <div key={i} className="mb-12 bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-blue-500 font-semibold">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-slate-600 dark:text-slate-400 text-sm">{exp.period}</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.desc}</p>
            <ul className="space-y-2">
              {exp.points.map((p, j) => <li key={j} className="flex"><span className="text-blue-500 mr-3">→</span>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Lavan Kumar Gajula. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
