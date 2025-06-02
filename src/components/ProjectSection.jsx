import projects from "../data/projects"; // Asegúrate de ajustar la ruta

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[#e0f2fe] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black">My Work</h2>
        <p className="text-black mt-2 font-semibold">A collection of projects I've worked on.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl text-black font-bold">{project.title}</h3>
            <p className="text-black mt-2 text-sm font-semibold">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
