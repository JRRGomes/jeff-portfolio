import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogTicker from '../components/BlogTicker'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }

  useEffect(() => {
    const typeText = async () => {
      const firstText = "Hello World!"

      for (let i = 0; i <= firstText.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 90))
        setDisplayText(firstText.slice(0, i))
      }

      await new Promise(resolve => setTimeout(resolve, 1000))

      for (let i = firstText.length; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 50))
        setDisplayText(firstText.slice(0, i))
      }

      await new Promise(resolve => setTimeout(resolve, 300))

      const secondText = "I'm Jefferson!"

      for (let i = 0; i <= secondText.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 90))
        setDisplayText(secondText.slice(0, i))
      }
    }

    typeText()
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 ">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{displayText}</span>
            <span
              className={`inline-block w-1 h-16 md:h-20 ml-1 text-primary ${showCursor ? 'opacity-80' : 'opacity-0'}`}
            >
              |
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
            Fullstack Developer passionate about building scalable web applications
            with modern technologies
          </p>
        </motion.div>

        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-secondary hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
      <BlogTicker />
    </section>
  )
}

export default Home
