import { Metadata } from 'next';
import DonateContent from './DonateContent';

export const metadata: Metadata = {
  title: 'Donate | Himalayan Sherpa Club of Sonoma',
  description: 'Support the Himalayan Sherpa Club of Sonoma. Your tax-deductible donation helps preserve Sherpa culture and support our community programs.',
};

export default function DonatePage() {
  return <DonateContent />;
}
