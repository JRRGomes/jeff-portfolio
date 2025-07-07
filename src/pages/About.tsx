import { motion } from 'framer-motion'
import jeffImage from '/jeff.jpg'

const About = () => {
  const skills = [
    'React/Next.js',
    'TypeScript',
    'Golang',
    'AWS',
    'GraphQL',
    'PostgreSQL'
  ]

  const experiences = [
    {
      title: 'Fullstack Developer at Pincei',
      description: '300k+ users platform, AWS, Golang',
      current: true
    },
    {
      title: 'Frontend Developer at Devworks',
      description: 'Updated the interface of a Ruby on Rails web system',
      current: false
    },
    {
      title: 'International Experience',
      description: 'Newcastle University, England',
      current: false
    },
  ]

  return (
    <section className="pt-30 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={jeffImage}
            alt="Jeff - Fullstack Developer"
            className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-lg"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <p className="text-lg text-secondary mb-6">
              I'm a passionate Fullstack Developer with solid experience in modern web
              and mobile development technologies. Currently working at Pincei, where I
              design and implement features for a platform serving over 300,000 users.
            </p>
            <p className="text-lg text-secondary mb-6">
              My journey includes international experience through the Science without
              Borders program at Newcastle University, which enhanced my adaptability
              and cross-cultural communication skills.
            </p>
            <p className="text-lg text-secondary mb-6">
              I'm always learning and currently pursuing a Go Expert post-graduation
              to deepen my backend expertise and expand my opportunities in the
              international market.
            </p>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <div>

            <motion.div
              className="p-8 rounded-2xl shadow-lg border-1 border-accent h-fit sticky top-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-primary font-bold mb-6">Experience Highlights</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-3 h-3 rounded-full mt-2 ${exp.current ? 'bg-green-500' : 'bg-accent'
                      }`} />
                    <div>
                      <h4 className="font-semibold text-primary">
                        {exp.title}
                        {exp.current && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-secondary">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-secondary mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>Available for remote opportunities</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-secondary mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Passionate about clean code & UX</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-secondary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  <span>Always learning new technologies</span>
                </div>
              </div>
            </motion.div>
            <motion.a
              href="/Jefferson_Gomes_Resume.pdf"
              download
              className="border border-accent text-accent mt-12 px-8 py-4 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
