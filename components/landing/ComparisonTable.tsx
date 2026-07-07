import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  us: boolean;
  others: boolean;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    name: 'Get found by homeowners searching in your city',
    us: true,
    others: false,
  },
  {
    name: 'Generate more qualified interior design enquiries',
    us: true,
    others: false,
  },
  {
    name: 'Build a professional online presence that creates trust',
    us: true,
    others: false,
  },
  {
    name: 'Rank higher on Google and Google Maps',
    us: true,
    others: false,
  },
  {
    name: 'Turn website visitors into consultation bookings',
    us: true,
    others: false,
  },
  {
    name: 'Reduce dependence on referrals alone',
    us: true,
    others: false,
  },
  {
    name: 'Track where every enquiry comes from',
    us: true,
    others: false,
  },
  {
    name: 'Create a steady flow of new project opportunities',
    us: true,
    others: false,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
            Direct Comparison
          </h2>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-primary">
            Why Studio Owners Choose Us
          </h3>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm">
            See the difference between working with a team that gets your business and a generic agency.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-primary text-white text-xs sm:text-sm uppercase tracking-wider font-heading">
                <th className="p-4 sm:p-5 font-medium text-lg">What Matters to You</th>
                <th className="p-4 sm:p-5 text-center text-brand-secondary font-bold text-lg">We Deliver</th>
                <th className="p-4 sm:p-5 text-center text-white/60 font-medium text-lg">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonFeatures.map((feat, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 text-brand-primary font-medium">
                    {feat.name}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {feat.us ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 text-red-400 mx-auto" strokeWidth={2.5} />
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {feat.others ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 text-red-400 mx-auto" strokeWidth={2.5} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}