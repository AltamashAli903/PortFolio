// const Home = () => {
//     return (
//         <>
//         <div className="bg-cyan-900">
            

//              <div>
//                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/f6bfe3125679809.611e01e916803.jpg" alt="port" />
//             </div>
         
//         {/* <div className="w-full flex justify-center items-start mt-10 pb-16">
//   <div className="text-left rounded-2xl shadow-lg border bg-gradient-to-tr from-blue-300 to-white border-teal-100 md:max-w-xl">
//     <p className="text-gray-700 text-base md:text-lg leading-8 tracking-wide text-justify">
//       Hey There! I'm a <span className="font-semibold text-blue-800">Frontend Developer</span> who turns ideas into pixel-perfect, responsive websites. I work with
//       <span className="font-semibold text-blue-800"> HTML, CSS, </span>
//       <span className="font-semibold text-blue-800">JavaScript</span> and
//       <span className="font-semibold text-blue-800"> React</span> to build fast, clean, and user-focused web apps.
//     </p>
//     <p className="mt-4 text-gray-700 text-base md:text-lg leading-8 tracking-wide text-justify">
//       I specialize in creating clean, maintainable code and interactive UI experiences. My background in low-level programming gives me a deeper understanding of performance and problem-solving, while my React work reflects modern web development practices. I'm always eager to learn, improve, and contribute to meaningful projects.
//     </p>
//   </div>
// </div> */}

//      </div>
        
//         </>
//             )
// }

//             export default Home
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-6 relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[400px] bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* SMALL INTRO */}
        <p className="text-emerald-600 font-medium tracking-wide">
          👋 Hello, I'm
        </p>

        {/* NAME */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 leading-tight">
          Altamash Ali
        </h1>

        {/* ROLE */}
        <h2 className="text-xl md:text-2xl text-gray-700 mt-4">
  Backend-Focused <br className="block md:hidden" />
  <span className="text-emerald-600 font-semibold">
    MERN Stack Developer
  </span>
</h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 leading-7 max-w-2xl mx-auto">Here Is My Portfolio Website, Where I Showcase My Skills, Projects, And Experience As A MERN Stack Developer.
          I build scalable backend systems, design high-performance REST APIs,
          and develop real-world applications like attendance management and logistics platforms.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            to="/projects"
            className="bg-emerald-600 text-white px-7 py-3 rounded-lg shadow hover:bg-emerald-700 transition duration-300"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-300 px-7 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* TECH STACK */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 pb-5 text-sm">
          {["Node.js", "Express", "MySQL", "REST APIs", "JWT", "Firebase"].map(
            (tech, i) => (
              <span
                key={i}
                className="bg-white border px-4 py-2 rounded-full text-gray-700 shadow-sm hover:shadow-md transition"
              >
                {tech}
              </span>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default Home;