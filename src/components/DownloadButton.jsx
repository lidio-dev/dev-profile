const DownloadButton = ({
  pdfUrl,
  fileName,
  label = "Descargar",
  className = "",
}) => {
  const handleDownload = () => {
    const url = `${window.location.origin}${import.meta.env.BASE_URL}${pdfUrl.replace(/^\/+/, "")}`;

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    link.target = "_blank";

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