'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

export default function QueueClient({ tickets, processAction }: { tickets: any[], processAction: () => Promise<void> }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await processAction();
    setIsProcessing(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">File d&apos;Attente</h1>
        <form onSubmit={handleSubmit}>
          <button 
            type="submit" 
            disabled={tickets.length === 0 || isProcessing}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
          >
            {isProcessing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement...
              </span>
            ) : (
              <span className="flex items-center">
                <PlayCircle className="w-5 h-5 mr-2" />
                Traiter le prochain
              </span>
            )}
          </button>
        </form>
      </div>

      {tickets.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 border-dashed text-center flex flex-col items-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
          <h3 className="text-lg font-medium text-slate-900">La file est vide</h3>
          <p className="text-slate-500 mt-1">Tous les tickets ont été traités. Bon travail !</p>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {tickets.map((ticket, index) => (
              <motion.div 
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`bg-white p-4 rounded-xl shadow-sm border ${index === 0 ? 'border-blue-400 ring-1 ring-blue-400' : 'border-slate-200'} flex items-center justify-between`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    index === 0 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {ticket.client} <span className="text-slate-400 font-normal text-sm ml-2">#{ticket.id}</span>
                    </h4>
                    <p className="text-slate-600 text-sm truncate max-w-md">{ticket.description}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  ticket.priorite === 'haute' ? 'bg-red-100 text-red-800' :
                  ticket.priorite === 'moyenne' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {ticket.priorite.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
