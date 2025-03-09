import React from 'react';
import HeroSection from './components/HeroSection';
import PracticeSection from './components/PracticeSection';
import AltPracticeSection from './components/AltPracticeSection';
import HowWeComponent from './components/HowWe';
import AcademicHero from './components/AcademicHero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Main content */}
      <main>
        <section className="shadow-xl">
          <HeroSection />
        </section>
        
        <section>
          <PracticeSection />
        </section>

        <section>
          <AltPracticeSection />
        </section>
        <section>
          <PracticeSection 
          title='Managing students academic life'
          description="There is more to study than just practicing giving test. To meet the requirement of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more."
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
    </div>
  );
}

export default App;