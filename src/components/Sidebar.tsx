
import React, { useState } from "react";
import { ChevronDown, FileText, Car } from "lucide-react";
import { useDocuments } from "../contexts/DocumentContext";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isFinanceiroOpen, setIsFinanceiroOpen] = useState(true);
  const { 
    selectedSubcategory, 
    setSelectedSubcategory 
  } = useDocuments();

  const handleToggleFinanceiro = () => {
    setIsFinanceiroOpen(!isFinanceiroOpen);
  };

  const handleSelectSubcategory = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  // The list of subcategories with their icons
  const subcategories = [
    { name: "Contas a pagar", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Reembolso de despesas", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Adiantamento de despesas", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Locação de veículos", icon: <Car className="w-4 h-4 mr-2" /> },
    { name: "Recebimento de demonstrativo NF e Prestador de serviço", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Pagamento de premiação de campanhas", icon: <FileText className="w-4 h-4 mr-2" /> }
  ];

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 shadow-lg",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Documentos</h2>
      </div>

      <div className="py-4">
        <div className="px-4 mb-1">
          <button 
            onClick={handleToggleFinanceiro}
            className="flex items-center justify-between w-full px-2 py-2 text-left rounded-md hover:bg-blue-50"
          >
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Financeiro</span>
            </div>
            <ChevronDown 
              className={`w-4 h-4 text-gray-500 transition-transform ${isFinanceiroOpen ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        {isFinanceiroOpen && (
          <div className="mt-1 ml-6 pl-4 border-l border-gray-200">
            {subcategories.map((subcategory) => (
              <button 
                key={subcategory.name}
                onClick={() => handleSelectSubcategory(subcategory.name)}
                className={cn(
                  "flex items-center w-full px-2 py-2 text-left text-sm rounded-md hover:bg-blue-50",
                  selectedSubcategory === subcategory.name ? "bg-blue-100 text-blue-700" : "text-gray-600"
                )}
              >
                {subcategory.icon}
                <span className="truncate">{subcategory.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
