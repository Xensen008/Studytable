import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import PracticeSection from './components/PracticeSection';
import AltPracticeSection from './components/AltPracticeSection';
import HowWeComponent from './components/HowWe';
import AcademicHero from './components/AcademicHero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <AnimatePresence mode='wait'>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main content */}
          <main>
            <motion.section 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
              className="shadow-xl"
            >
              <HeroSection />
            </motion.section>
            
            <section>
              <PracticeSection from="first" />
            </section>

            <section>
              <AltPracticeSection />
            </section>

            <section>
              <PracticeSection 
                title='Managing students academic life'
                description="There is more to study than just practicing giving test. To meet the requirement of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more."
                from="third"
              />
            </section>

            <section>
              <HowWeComponent/>
            </section>
            <section >
              <AcademicHero/>
            </section>
          </main>
          <footer>
            <Footer/>
          </footer>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;