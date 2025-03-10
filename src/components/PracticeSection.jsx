import React from 'react'
import ChatCard from './ChatCard';
import AcademicLifeCard from './AcademicLifeCard';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

const PracticeSection = ({
    title = "Unlimited Practice session",
    description = "For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7.",
    from="first"
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const renderCard = () => {
        switch(from) {
            case 'first':
                return <ChatCard />;
            case 'third':
                return <AcademicLifeCard />;
            default:
                return <ChatCard />;
        }
    };

    return (
        <div className="bg-[#1a1a2e] py-20 px-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Content Section */}
                    <AnimationWrapper className="space-y-8">
                        <div className="relative">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                                {title}
                            </h2>
                            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                        </div>

                        <p className="text-lg text-indigo-200/70 leading-relaxed">
                            {description}
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { count: '10K+', label: 'Daily Questions' },
                                { count: '24/7', label: 'AI Support' },
                                { count: '98%', label: 'Success Rate' },
                                { count: '50K+', label: 'Active Students' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-indigo-500/20">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                        {stat.count}
                                    </div>
                                    <div className="text-indigo-200/70 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimationWrapper>

                    {/* Dynamic Card Section */}
                    <AnimationWrapper>
                        <div className="relative">
                            {/* Floating Elements */}
                            <div className="absolute -top-6 right-20 animate-float-slow">
                                <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-indigo-500/20">
                                    <span className="text-indigo-100 font-mono">Q = mc∆T</span>
                                </div>
                            </div>
                            
                            <div className="relative bg-gradient-to-b from-[#20203a]/80 to-[#2a1f3f]/80 p-6 rounded-2xl backdrop-blur-xl border border-indigo-500/20">
                                {renderCard()}
                            </div>
                        </div>
                    </AnimationWrapper>
                </motion.div>
            </div>
        </div>
    );
}

export default PracticeSection;