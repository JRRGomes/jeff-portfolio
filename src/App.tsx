import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {

  return (
    <Router basename='/jeff-portfolio'>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
