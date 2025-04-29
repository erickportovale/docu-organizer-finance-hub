
import React from "react";
import { FileText, Download } from "lucide-react";
import { Document } from "../data/documents";
import { useDocuments } from "../contexts/DocumentContext";

interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const { setCurrentDocument } = useDocuments();

  const handlePreview = () => {
    setCurrentDocument(document);
  };

  const handleDownload = () => {
    // In a real application, this would initiate a download
    // For now, we'll just open it in a new tab
    window.open(document.url, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <FileText className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">{document.title}</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{document.description}</p>
      
      <div className="flex justify-between mt-2">
        <button
          onClick={handlePreview}
          className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 flex items-center text-sm"
        >
          <FileText className="w-4 h-4 mr-1" />
          Visualizar
        </button>
        
        <button
          onClick={handleDownload}
          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center text-sm"
        >
          <Download className="w-4 h-4 mr-1" />
          Download
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
