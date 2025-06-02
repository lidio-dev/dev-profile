import DownloadButton from "./DownloadButton";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#082f49] text-white py-5 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
        <p className="font-semibold text-lg text-white mb-12">
          ¿Te gustaría colaborar o simplemente saludar? ¡Estoy abierto a nuevas oportunidades y conversaciones!
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          {/* Información de contacto */}
          <div className="space-y-4">
            <p><span className="font-bold">📧 Correo:</span> <a href="mailto:lidio.larriva@gmail.com" className="text-indigo-400 hover:underline font-semibold">lidio.larriva@gmail.com</a></p>
            <p><span className="font-bold">💼 LinkedIn:</span> <a href="https://linkedin.com/in/tuusuario" target="_blank" className="text-indigo-400 hover:underline font-semibold">linkedin.com/in/tuusuario</a></p>
            <p><span className="font-bold">🐙 GitHub:</span> <a href="https://github.com/tuusuario" target="_blank" className="text-indigo-400 hover:underline font-semibold">github.com/tuusuario</a></p>
            <p className="font-semibold"><span className="font-bold">📍 Ubicación:</span> Torquay, Devon, UK</p>
          </div>

          {/* Extra opcional: Botón para descargar CV */}
          <div className="flex flex-col items-start justify-center space-y-4">
            <p className="text-white font-bold">¿Quieres ver más sobre mí?</p>
            <DownloadButton 
              pdfUrl="/documents/CV_LidioJuarez.pdf" 
              fileName="CV_LidioJuarez.pdf" 
              label="Descargar CV"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
