import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Higher</h3>
          <p className="text-2xl font-bold mb-2">Job</p>
          <p className="text-2xl font-bold mb-2">Satisfaction</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Higher</h3>
          <p className="text-2xl font-bold mb-2">Employee</p>
          <p className="text-2xl font-bold mb-2">Retention</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Fewer</h3>
          <p className="text-2xl font-bold mb-2">Sick</p>
          <p className="text-2xl font-bold mb-2">Days</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Easier</h3>
          <p className="text-2xl font-bold mb-2">Recruitment</p>
        </div>
      </div>
    </div>
  );
};

export default page;