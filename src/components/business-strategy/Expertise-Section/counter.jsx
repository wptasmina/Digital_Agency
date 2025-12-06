import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Counter() {
  const [view, setView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { end: 28, suffix: "+", label: "Website Launched" },
    { end: 13, suffix: "k", label: "Total Project" },
    { end: 98, suffix: "%", label: "Client Satisfaction" },
    { end: 17, suffix: "+", label: "Years Running" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-wrap justify-between max-w-6xl mx-auto font-geist">

      {stats.map((item, i) => (
        <div key={i} className="space-y-2 min-w-[150px] p-4 py-12 border border-[#e3e3e3] border-dashed ">
          
          <h1 className="text-[#19324D] text-6xl font-bold">
            {view && <CountUp end={item.end} duration={3} />}
            <span className="text-4xl font-light">{item.suffix}</span>
          </h1>

          <h3 className="text-[#19324D] text-lg font-medium">{item.label}</h3>
          <p className="text-[#5F758C] text-sm">Helping brands make their mark online</p>
        </div>
      ))}

    </div>
  );
}
