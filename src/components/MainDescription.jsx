import MainImage from "../assets/images/main.png";
import DownloadButton  from "./DownloadButton";

const MainDescription = () => {
  return (
    <section className="w-full min-h-screen bg-[#082f49] py-20 px-6 md:px-16 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
           Bienvenido<span className="text-indigo-400">.</span>
          </h1>
          <p className="text-white text-base font-semibold md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Mi nombre es <span className="font-bold text-indigo-400">Lidio Juarez Larriva</span>, Estudiante de Ingeniería en Gestión y Desarrollo de Software en proceso de titulación con experiencia práctica en el desarrollo de sistemas web y móviles. Familiarizado con metodologías modernas en el uso de frameworks para crear soluciones eficientes, escalables y centradas en el usuario. Comprometido con el aprendizaje continuo y la aplicación de buenas prácticas de programación.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={MainImage}
            alt="Presentation"
            className="w-80 h-80  mx-auto object-contain mb-6"
          />

          {/* Botones debajo de la imagen */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={`${import.meta.env.BASE_URL}documents/CV_LidioJuarez.pdf`}
              download="CV_LidioJuarez.pdf"
              className="bg-sky-600 font-bold text-white py-2 px-4 rounded-xl hover:bg-indigo-600 transition"
            >
              Descargar
            </a>
            <a
              href="#projects"
              className="border font-bold border-white text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-[#0f172a] transition"
            >
              Proyectos
            </a>
            <a
              href="#skills"
              className="border font-bold border-white text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-[#0f172a] transition"
            >
              Habilidades
            </a>
            <a
              href="#contact"
              className="border font-bold border-white text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-[#0f172a] transition"
            >
              Contacto              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDescription;
