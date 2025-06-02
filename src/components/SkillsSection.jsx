import skills from "../data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0c4a6e] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna izquierda: habilidades técnicas */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Habilidades Técnicas</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-24 bg-white rounded-xl shadow-lg p-2 border border-gray-200 hover:shadow-xl transition flex flex-col items-center"
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-14 h-14 object-contain mb-2"
                />
                <h3 className="text-sm text-black font-bold text-center">
                  {skill.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: cualidades personales */}
        <div className="border-l border-black/20 pl-6">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Cualidades Personales</h2>
            <ul className="font-semibold text-lg leading-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 list-disc list-inside"> 
            <li>Comunicación efectiva</li>
            <li>Resolución de problemas </li>
            <li>Trabajo en equipo</li>
            <li>Adaptabilidad</li>
            <li>Gestión del tiempo</li>
            <li>Pensamiento crítico</li>
            <li>Liderazgo</li>
            <li>Responsabidad</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
