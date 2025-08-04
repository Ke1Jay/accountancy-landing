export function LogoSection() {
  const logos = [
    "TechCorp",
    "GreenEnergy", 
    "StartupHub",
    "RetailPlus",
    "ConsultPro",
    "DigitalWorks",
    "LocalBiz"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">Trusted by businesses across industries</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="text-gray-400 font-bold text-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}