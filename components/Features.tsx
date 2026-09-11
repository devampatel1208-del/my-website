const features = [
  {
    icon: '⚡',
    title: 'Ultra-Fast',
    description: 'Optimized for Core Web Vitals. Sub-100ms First Contentful Paint.'
  },
  {
    icon: '🎯',
    title: 'Responsive',
    description: 'Perfect on mobile, tablet, and desktop. Built with mobile-first approach.'
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'WCAG 2.1 AA compliant. Keyboard navigation and screen reader support.'
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Security headers, CSP policies, and best practices built-in.'
  },
  {
    icon: '📦',
    title: 'Scalable',
    description: 'Production-ready architecture. Scales from startup to enterprise.'
  },
  {
    icon: '🚀',
    title: 'Modern Stack',
    description: 'React 18, Next.js 14, Tailwind CSS. Latest technologies.'
  },
];

export function Features() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose This Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to build fast, modern, accessible web experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow duration-300 bg-slate-50 hover:bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
