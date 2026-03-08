import ProductDetail from '../../../(sections)/components/ProductDetail';

const product = {
  eyebrow: 'SETU CRM',
  title: 'Trade relationship management for buyers, suppliers, and follow-up execution.',
  description: 'SETU CRM is built for global trade workflows where buyer conversations, supplier intelligence, documents, and follow-up discipline all matter. It is closer to a trade operating CRM than a generic pipeline tool.',
  outcomes: ['Better trade relationship continuity', 'Cleaner buyer/supplier data capture', 'Operational follow-up discipline'],
  problems: [
    'Buyer and supplier information spread across chats, notes, and files',
    'Trade-show lead capture without structured follow-through',
    'No reliable system for documents, reminders, and relationship history'
  ],
  features: [
    'Buyer and supplier workflow capture',
    'Document-aware CRM structure',
    'Follow-up management and relationship history',
    'Designed to connect with trade execution and future analytics'
  ]
};

export const metadata = { title: 'SETU CRM — SETU Groups' };

export default function Page({ params }) {
  return <ProductDetail locale={params.locale} product={product} />;
}
