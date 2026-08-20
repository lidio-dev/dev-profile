const DownloadButton = ({
  pdfUrl,
  fileName,
  label = "Descargar",
  className = "",
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");

    const url = pdfUrl.startsWith("/")
      ? `${import.meta.env.BASE_URL}${pdfUrl.slice(1)}`
      : pdfUrl;

    link.href = url;
    link.download = fileName;
    link.click();
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
