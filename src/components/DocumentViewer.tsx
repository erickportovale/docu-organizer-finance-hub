
import React from "react";
import { X, Download } from "lucide-react";
import { useDocuments } from "../contexts/DocumentContext";

const DocumentViewer: React.FC = () => {
  const { currentDocument, setCurrentDocument } = useDocuments();

  if (!currentDocument) {
    return null;
  }

  const handleClose = () => {
    setCurrentDocument(null);
  };

  const handleDownload = () => {
    // In a real application, this would initiate a download
    // For now, we'll just open it in a new tab
    window.open(currentDocument.url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl flex flex-col h-[90vh]">
        <div className="flex justify-between items-center border-b border-gray-200 px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            {currentDocument.title}
          </h2>
          <div className="flex items-center">
            <button
              onClick={handleDownload}
              className="mr-2 p-2 rounded-md hover:bg-gray-100"
              title="Download"
            >
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-md hover:bg-gray-100"
              title="Fechar"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-auto bg-gray-100">
          {/* In a real application, this would be an actual PDF viewer */}
          <div className="h-full flex items-center justify-center bg-white rounded border border-gray-300">
            <div className="text-center">
              <img 
                src={currentDocument.url} 
                alt="Documento preview" 
                className="max-w-full max-h-96 mx-auto mb-4" 
              />
              <p className="text-gray-500 italic">
                Este é um placeholder. Em um ambiente real, você veria o documento PDF "{currentDocument.fileName}" aqui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
