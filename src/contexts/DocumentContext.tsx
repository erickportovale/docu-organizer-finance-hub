
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Document, documents } from "../data/documents";

interface DocumentContextProps {
  selectedCategory: string;
  selectedSubcategory: string | null;
  currentDocument: Document | null;
  filteredDocuments: Document[];
  setSelectedCategory: (category: string) => void;
  setSelectedSubcategory: (subcategory: string | null) => void;
  setCurrentDocument: (document: Document | null) => void;
}

const DocumentContext = createContext<DocumentContextProps | undefined>(undefined);

export const useDocuments = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error("useDocuments must be used within a DocumentProvider");
  }
  return context;
};

export const DocumentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Financeiro");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [currentDocument, setCurrentDocument] = useState<Document | null>(null);

  const filteredDocuments = selectedSubcategory
    ? documents.filter(doc => doc.subcategory === selectedSubcategory)
    : documents.filter(doc => doc.category === selectedCategory);

  return (
    <DocumentContext.Provider
      value={{
        selectedCategory,
        selectedSubcategory,
        currentDocument,
        filteredDocuments,
        setSelectedCategory,
        setSelectedSubcategory,
        setCurrentDocument
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
