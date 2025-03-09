import React from 'react'
import StudyComponent from './StudyCard';

const AltPracticeSection = ({
    title = "Personalized Learning",
    description = "Our platform adapts to your unique learning style and pace. We analyze your strengths and weaknesses to deliver customized content that helps you improve faster. With real-time feedback and progress tracking, you'll always know exactly where you stand and what to focus on next."
}) => {
    return (
        <div className="bg-[#1a1a2e] py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full filter blur-[80px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[80px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Study Component */}
                    <div className="relative order-2 lg:order-1">
                        {/* Floating Elements */}
                        <div className="absolute -top-8 right-20 animate-float">
                            <div className="bg-white/5 backdrop-blur-xl px-4 py-2 rounded-lg border border-indigo-500/20">
                                <span className="text-indigo-100 font-mono">dx/dt = v(t)</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-transparent rounded-3xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-b from-[#20203a]/80 to-[#2a1f3f]/80 p-6 rounded-2xl backdrop-blur-xl border border-indigo-500/20">
                                <StudyComponent />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="relative inline-block">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {title}
                            </h2>
                            <div className="absolute -bottom-3 left-0 h-1 w-2/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent"></div>
                        </div>

                        <p className="text-lg text-indigo-200/70 leading-relaxed">
                            {description}
                        </p>

                        {/* Feature List */}
                        <div className="space-y-4">
                            {[
                                { icon: '🎯', title: 'Smart Analysis', desc: 'AI-powered learning path' },
                                { icon: '📈', title: 'Progress Tracking', desc: 'Real-time performance insights' },
                                { icon: '🔄', title: 'Adaptive Content', desc: 'Personalized study material' }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-indigo-500/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div>
                                        <h3 className="text-white font-medium">{feature.title}</h3>
                                        <p className="text-indigo-200/70 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AltPracticeSection;
