import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetails from './pages/CourseDetails';
import StudentDashboard from './pages/StudentDashboard';
import MyCourses from './pages/MyCourses';
import Certificates from './pages/Certificates';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import BrowserReport from './pages/BrowserReport';
import ProjectActivity from './pages/ProjectActivity';

function App() {
  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<CourseCatalog />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/reports" element={<BrowserReport />} />
          <Route path="/admin/activity" element={<ProjectActivity />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
