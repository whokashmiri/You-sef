export default function Jewelry() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Top tab line with nav beside span */}
      <div className="flex items-center justify-between px-6 md:px-20 p-10 border-b border-gray-800 relative">
        {/* Left text with underline */}
        <div className="relative">
          <span className="text-lg uppercase tracking-widest font-light">L’heure du diamant universe</span>
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white" />
        </div>

        {/* Sub navigation bar */}
        <nav className="flex space-x-8 text-sm uppercase tracking-wider font-medium">
          <a href="#" className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-white after:content-['']">
            Watches
          </a>
          <a href="#" className="hover:text-gray-400">Jewellery</a>
          <a href="#" className="hover:text-gray-400">Backstage</a>
        </nav>
      </div>

      {/* Main hero content */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-lg uppercase tracking-wide text-gray-400 mb-2">
            L’heure du diamant
          </h4>
          <h1 className="text-3xl md:text-5xl font-serif font-semibold uppercase mb-6 leading-tight">
            Master of Jewellery Watches
          </h1>
          <p className="text-base text-gray-200 mb-8 leading-relaxed max-w-3xl">
            From radiant crown-set diamonds adorning the bezel to colourful ornamental stone dials and 
            hand-engraved bark-type bracelets, each L'Heure du Diamond watch is a mesmerising masterpiece. 
            Explore this iconic collection.
          </p>
          <button className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs uppercase px-6 py-3 rounded-none tracking-wider transition">
            Discover More
          </button>
        </div>
      </section>
    </div>
  );
}
