/// <reference types="@figma/plugin-typings" />

const calculateCarbonFootprint = (energyConsumption: number, carbonIntensity: number): number => {
    const carbonFootprint = energyConsumption * carbonIntensity;
    return carbonFootprint;
  };
  
  figma.showUI(__html__, { width: 250, height: 350 });
  
  figma.ui.onmessage = async (msg) => {
    if (msg.type === 'updateCarbonFootprint') {
      const { energyConsumption, carbonIntensity } = msg;
      const startTime = new Date().getTime();
  
      setInterval(async () => {
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - startTime) / 1000; // Time in seconds
        const carbonFootprint = calculateCarbonFootprint(energyConsumption * elapsedTime, carbonIntensity);
  
        figma.ui.postMessage({ type: 'updateCarbonFootprint', carbonFootprint });
      }, 100);
    } else if (msg.type === 'getLinks') {
      // Add your links for carbon footprint reduction tips
      const links = [
        {
          title: 'Energy-saving tips',
          url: 'https://example.com/energy-saving-tips',
        },
        // ... more links
      ];
      figma.ui.postMessage({ type: 'displayLinks', links });
    }
  };  