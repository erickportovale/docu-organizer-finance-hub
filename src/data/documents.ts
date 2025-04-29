
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
    title: "Solicitação de Contas a Pagar",
    category: "Financeiro",
    subcategory: "Contas a pagar",
    fileName: "SOLICITACAOCONTASAPAGAR.pdf",
    description: "Formulário para solicitação de pagamento de contas",
    url: "/arquivo/SOLICITACAOCONTASAPAGAR.pdf"
  },
  {
    id: "2",
    title: "Solicitação de Reembolso",
    category: "Financeiro",
    subcategory: "Reembolso de despesas",
    fileName: "SOLICITACAOREEMBOLSODEDESPESAS.pdf",
    description: "Formulário para solicitação de reembolso de despesas",
    url: "/arquivo/SOLICITACAOREEMBOLSODEDESPESAS.pdf"
  },
  {
    id: "3",
    title: "Adiantamento de Despesas",
    category: "Financeiro",
    subcategory: "Adiantamento de despesas",
    fileName: "SOLICITACAOADIANTAMENTODEDESPESAS.pdf",
    description: "Formulário para solicitação de adiantamento de despesas",
    url: "/arquivo/SOLICITACAOADIANTAMENTODEDESPESAS.pdf"
  },
  {
    id: "4",
    title: "Locação de Veículos",
    category: "Financeiro",
    subcategory: "Locação de veículos",
    fileName: "SOLICITACAOLOCACAODEVEICULO.pdf",
    description: "Formulário para solicitar a locação de veículos",
    url: "/arquivo/SOLICITACAOLOCACAODEVEICULO.pdf"
  },
  {
    id: "5",
    title: "Recebimento de Demonstrativo NF e Prestador de Serviço",
    category: "Financeiro",
    subcategory: "Recebimento de demonstrativo NF e Prestador de serviço",
    fileName: "RECEBIMENTODEDEMONSTRATIVOEENVIODENOTAFISCALPRESTADORDESERVICO.pdf",
    description: "Procedimento para recebimento de demonstrativos e notas fiscais",
    url: "/arquivo/RECEBIMENTODEDEMONSTRATIVOEENVIODENOTAFISCALPRESTADORDESERVICO.pdf"
  },
  {
    id: "6",
    title: "Pagamento de Premiação de Campanhas",
    category: "Financeiro",
    subcategory: "Pagamento de premiação de campanhas",
    fileName: "SOLICITACAOPAGAMENTOPREMIACAOCAMPANHAS.pdf",
    description: "Formulário para solicitação de pagamento de premiações",
    url: "/arquivo/SOLICITACAOPAGAMENTOPREMIACAOCAMPANHAS.pdf"
  }
];
