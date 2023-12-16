"use client"
import React, { useEffect } from 'react';

const BitrixButton: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://b24.ussat.tm/upload/crm/site_button/loader_2_rmxc6m.js?' + (Date.now() / 60000 | 0);

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component unmounts
      head.removeChild(script);
    };
  }, []);

  // You can add styles inline or link to an external stylesheet

  return (
    <div>
      {/* Apply the styles to the wrapping div or directly to the button element */}
      <div  >
        <button>Bitrix Button</button>
      </div>
    </div>
  );
};

export default BitrixButton;
