export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary px-4 py-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Lightning Fast
          <span className="block text-accent">Web Experience</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Built with Next.js 14, optimized for speed. Responsive design, accessible, and production-ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}
