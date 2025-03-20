import React from 'react';
import { WhatIsAI } from './WhatIsAI';
import { CursorAIDev } from './CursorAIDev';

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-20">
          <WhatIsAI />
          <CursorAIDev />
        </div>
      </div>
    </section>
  );
}