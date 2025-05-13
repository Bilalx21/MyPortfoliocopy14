import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";

function App() {
  return <>
  <div
  className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#ff0000_100%)]">
  </div>
         
  <main className="flex flex-col items-center px-4 md:px-8
  1g:px-16">
    <Hero/>
    <Navbar/>
    <Tech/>
    <Projects/>
    <Contact/>

  </main>
  
      </>;
}

 

export default App
