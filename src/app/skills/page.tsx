export default function Skills() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Skills & Expertise</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Cloud Platforms', skills: ['AWS Redshift', 'AWS Glue', 'AWS Lambda', 'AWS Kinesis', 'AWS S3', 'CloudFormation'] },
            { title: 'Data Engineering', skills: ['ETL/ELT Pipelines', 'Data Modeling', 'Data Warehousing', 'Pipeline Orchestration', 'Real-time Streaming', 'Schema Design'] },
            { title: 'Languages', skills: ['SQL (Advanced)', 'Python (Proficient)', 'Bash', 'PySpark'] },
            { title: 'Databases', skills: ['Redshift', 'Snowflake', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'Elasticsearch'] },
            { title: 'Tools', skills: ['Apache Spark', 'Apache Airflow', 'Git', 'CloudWatch', 'Docker', 'Terraform'] },
            { title: 'Domain Expertise', skills: ['Healthcare Data', 'Financial Data', 'Marketing Analytics', 'Customer Analytics', 'SAP SD', 'BI & Dashboarding'] }
          ].map((cat, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((s) => <li key={s} className="flex"><span className="text-blue-500 mr-3">•</span>{s}</li>)}
              </ul>
            </div>
          ))}
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
