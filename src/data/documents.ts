
export interface Document {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  fileName: string;
  description: string;
  url: string;
}

export const documents: Document[] = [
  {
    id: "1",
    title: "Formulário de Reembolso",
    category: "Financeiro",
    subcategory: "Solicitação de reembolso de despesas",
    fileName: "formulario_reembolso.pdf",
    description: "Formulário para solicitação de reembolso de despesas",
    url: "/placeholder.svg" // In a real application, this would be a path to a PDF file
  },
  {
    id: "2",
    title: "Política de Reembolso",
    category: "Financeiro",
    subcategory: "Solicitação de reembolso de despesas",
    fileName: "politica_reembolso.pdf",
    description: "Documento com as políticas e procedimentos para reembolso",
    url: "/placeholder.svg" // In a real application, this would be a path to a PDF file
  },
  {
    id: "3",
    title: "Formulário de Locação de Veículos",
    category: "Financeiro",
    subcategory: "Solicitação de locação de veículos",
    fileName: "formulario_locacao_veiculos.pdf",
    description: "Formulário para solicitar a locação de veículos",
    url: "/placeholder.svg" // In a real application, this would be a path to a PDF file
  },
  {
    id: "4",
    title: "Política de Locação",
    category: "Financeiro",
    subcategory: "Solicitação de locação de veículos",
    fileName: "politica_locacao_veiculos.pdf",
    description: "Normas e procedimentos para locação de veículos",
    url: "/placeholder.svg" // In a real application, this would be a path to a PDF file
  }
];
