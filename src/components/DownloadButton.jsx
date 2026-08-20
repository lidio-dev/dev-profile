const DownloadButton = ({
  pdfUrl,
  fileName,
  label = "Descargar",
  className = "",
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = `${import.meta.env.BASE_URL}${pdfUrl.replace(/^\/+/, "")}`;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`bg-sky-600 font-bold text-white py-2 px-4 rounded-xl hover:bg-indigo-600 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default DownloadButton;