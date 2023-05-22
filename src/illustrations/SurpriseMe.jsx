import React, { useEffect, useState } from 'react'

export const SurpriseMe = ({className}) => {

  const [fillColor, setFillColor] = useState('#FDA135');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    const observer = new MutationObserver(() => {
      if (htmlElement.classList.contains('dark')) {
        setFillColor('#FFC890');
      } else {
        setFillColor('#FDA135');
      }
    });

    observer.observe(htmlElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
   <svg 
   className={`${className}`}
   id="uuid-aa5b9dc1-4209-486c-9521-193f3792931d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.38 308.52"><path 
   fill={fillColor}
   class="uuid-381af577-72ad-46d1-a039-7d16854661e3" d="m281.66,154.26c0-10.69,13.08-22.7,10.8-32.7-2.35-10.33-19.4-15.47-23.89-24.79-4.57-9.47,1.99-26-4.51-34.13s-24.11-5.44-32.28-11.96c-8.13-6.49-9.36-24.26-18.83-28.83-9.32-4.49-23.95,5.57-34.27,3.23s-18.81-17.75-29.49-17.75-19.49,15.48-29.49,17.75c-10.33,2.35-24.96-7.72-34.28-3.23s-10.69,22.33-18.83,28.83c-8.17,6.53-25.76,3.79-32.28,11.97s.06,24.66-4.51,34.13c-4.49,9.32-21.54,14.46-23.89,24.79-2.27,10,10.8,22.01,10.8,32.7s-13.08,22.7-10.8,32.7c2.35,10.33,19.4,15.47,23.89,24.79,4.57,9.47-1.99,26,4.51,34.13,6.53,8.17,24.11,5.44,32.28,11.96s9.36,24.26,18.83,28.83c9.32,4.49,23.95-5.57,34.27-3.23s18.81,17.75,29.49,17.75,19.49-15.48,29.49-17.75,24.96,7.72,34.28,3.23,10.69-22.33,18.83-28.83c8.17-6.53,25.76-3.79,32.28-11.97s-.06-24.66,4.51-34.13c4.49-9.32,21.54-14.46,23.89-24.79,2.27-10-10.8-22.01-10.8-32.7Z"/><text 
   class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(134.94 238.1) rotate(-162.66)"><tspan x="0" y="0">s</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(114.86 232.3) rotate(-147.51)"><tspan x="0" y="0">u</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(94.8 219) rotate(-135.06)"><tspan x="0" y="0">r</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(85.12 210.47) rotate(-122.62)"><tspan x="0" y="0">p</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(72.52 189.98) rotate(-110.09)"><tspan x="0" y="0">r</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(68 177.35) rotate(-102.57)"><tspan x="0" y="0">i</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(65.53 169.46) rotate(-92.54)"><tspan x="0" y="0">s</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(64.17 148.56) rotate(-77.65)"><tspan x="0" y="0">e</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(69.85 125.39) rotate(-66.48)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(71.1 116.64) rotate(-50.68)"><tspan x="0" y="0">m</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(95.85 87.83) rotate(-30.25)"><tspan x="0" y="0">e</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(116.63 76.3) rotate(-18.54)"><tspan x="0" y="0">!</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(127.2 72.75) rotate(-11.54)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(136.42 70.82) rotate(-5.14)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(145.71 69.93) rotate(1.11)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(155.18 70.07) rotate(7.49)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(164.5 71.24) rotate(13.89)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(173.36 72.73) rotate(24.26)"><tspan x="0" y="0">s</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(192.59 80.9) rotate(39.34)"><tspan x="0" y="0">u</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(210.94 96.5) rotate(51.77)"><tspan x="0" y="0">r</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(219.52 106.1) rotate(64.25)"><tspan x="0" y="0">p</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(229.57 127.95) rotate(76.82)"><tspan x="0" y="0">r</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(232.54 141.02) rotate(84.29)"><tspan x="0" y="0">i</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(234.05 149.19) rotate(94.24)"><tspan x="0" y="0">s</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(232.92 170.09) rotate(109.27)"><tspan x="0" y="0">e</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(224.51 192.4) rotate(120.4)"><tspan x="0" y="0"> </tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(222.2 200.95) rotate(136.15)"><tspan x="0" y="0">m</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(194.22 226.6) rotate(156.63)"><tspan x="0" y="0">e</tspan></text><text class="uuid-ae824234-723f-4f9c-bb18-414ce6216d8a" transform="translate(172.2 235.56) rotate(168.37)"><tspan x="0" y="0">!</tspan></text></svg>
  )
}


