
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { DocumentProvider } from "../contexts/DocumentContext";
import Sidebar from "../components/Sidebar";
import DocumentCard from "../components/DocumentCard";
import DocumentViewer from "../components/DocumentViewer";
import { useDocuments } from "../contexts/DocumentContext";

const DocumentsContent: React.FC = () => {
  const { selectedSubcategory, filteredDocuments } = useDocuments();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {selectedSubcategory || "Todos os Documentos"}
      </h1>
      
      {selectedSubcategory && (
        <p className="text-gray-600 mb-6">
          Documentos relacionados à {selectedSubcategory.toLowerCase()}
        </p>
      )}
      
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map(document => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum documento encontrado</p>
        </div>
      )}
    </div>
  );
};

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <DocumentProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="flex-1 transition-all duration-300 md:ml-64">
          <div className="p-4 border-b bg-white shadow-sm flex items-center md:hidden">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100 mr-2"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Documentos</h1>
          </div>
          
          <div className="container mx-auto p-6">
            <DocumentsContent />
          </div>
        </div>
        
        <DocumentViewer />
      </div>
    </DocumentProvider>
  );
};

export default Index;
