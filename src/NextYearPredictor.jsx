import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function NextYearPredictor() {
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [nextYear, setNextYear] = useState(null);

  const loadingMessages = [
    'Calculating next year with AI',
    'reading your ahh code',
    'Calculating spacetime vortexes'
  ];

  const handlePredict = async () => {
    if (!year) return;
    
    setIsLoading(true);
    setNextYear(null);
    
    // Show each loading message with delay
    for (let i = 0; i < loadingMessages.length; i++) {
      setCurrentMessage(loadingMessages[i]);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    // Calculate and show next year
    const result = parseInt(year) + 1;
    setNextYear(result);
    setIsLoading(false);
    setCurrentMessage('');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh'
    }}>
      <h1>Year Predictor</h1>
      <h2>Enter the current year to predict next year</h2>
      
      <div>
        <input
          type="number"
          placeholder="over here bro"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        
        <button 
          onClick={handlePredict}
          disabled={!year || isLoading}
        >
          Predict Next Year
        </button>
      </div>

      {isLoading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px' }}>
          <Loader2 className="animate-spin" size={24} />
          {currentMessage}
        </div>
      )}

      {nextYear && !isLoading && (
        <div>
          Next Year: {nextYear}
        </div>
      )}
    </div>
  );
}