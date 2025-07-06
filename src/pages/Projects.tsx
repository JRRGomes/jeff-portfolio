import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  gradient: string
  status: 'completed' | 'in-progress' | 'planned'
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Fullstack Dashboard',
      description: 'Complete web application with Next.js frontend and Golang backend, featuring real-time data visualization and user management.',
      technologies: ['Next.js', 'TypeScript', 'Golang', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-accent to-cyan-500',
      status: 'planned'
    },
    {
      id: 2,
      title: 'Data Analytics Platform',
      description: 'React application consuming multiple APIs with GraphQL, featuring interactive charts and real-time data updates.',
      technologies: ['React', 'GraphQL', 'Chart.js', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500',
      status: 'planned'
    },
    {
      id: 3,
      title: 'Real-time Chat App',
      description: 'High-performance chat application with WebSockets, Redis for caching, and optimized for scalability.',
      technologies: ['WebSockets', 'Redis', 'Docker', 'Golang'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-teal-500',
      status: 'planned'
    }
  ]

  const getStatusBadge = (status: Project['status']) => {
    const badges = {
      completed: 'bg-green-100 text-green-800',
      'in-progress': 'bg-yellow-100 text-yellow-800',
      planned: 'bg-blue-100 text-blue-800'
    }

    const labels = {
      completed: 'Completed',
      'in-progress': 'In Progress',
      planned: 'Coming Soon'
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badges[status]}`}>
        {labels[status]}
      </span>
    )
  }

  return (
    <section id="projects" className="pt-30 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg text-secondary text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some projects I'm working on to showcase my skills and demonstrate
          my ability to build scalable, modern applications.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute top-4 right-4">
                  {getStatusBadge(project.status)}
                </div>
                {project.status === 'planned' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl text-primary font-bold mb-3">{project.title}</h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-muted px-3 py-1 rounded-full border border-accent text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <button
                    className={`font-medium transition-colors ${project.status === 'completed'
                      ? 'text-accent hover:text-blue-600'
                      : 'text-gray-400 cursor-not-allowed'
                      }`}
                    disabled={project.status !== 'completed'}
                  >
                    Live Demo
                  </button>
                  <button
                    className={`font-medium transition-colors ${project.status === 'completed'
                      ? 'text-accent hover:text-blue-600'
                      : 'text-gray-400 cursor-not-allowed'
                      }`}
                    disabled={project.status !== 'completed'}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary mb-4">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="https://github.com/JRRGomes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-blue-600 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
