import React from 'react'
import ChatCard from './ChatCard';
import StudyComponent from './StudyCard';

const AltPracticeSection = ({
    title = "Personalized Learning",
    description = "Our platform adapts to your unique learning style and pace. We analyze your strengths and weaknesses to deliver customized content that helps you improve faster. With real-time feedback and progress tracking, you'll always know exactly where you stand and what to focus on next."
}) => {
    return (
        <div className="bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid layout: 2x2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Box 1: Top Left - Empty */}
                    <div className="hidden lg:block"></div>

                    {/* Box 2: Top Right - Content section */}
                    <div className="flex flex-col gap-[15px] w-full p-4">
                        <h1 className="text-[44px] font-semibold text-black">
                            {title}
                        </h1>

                        <p className="text-[22px] leading-[33px] text-[#4b4b4b]">
                            {description}
                        </p>
                    </div>

                    {/* Box 3: Bottom Left - ChatCard section */}
                    <div className="w-full lg:col-span-1">
                        <div className="w-full">
                            <StudyComponent/>
                        </div>
                    </div>

                    {/* Box 4: Bottom Right - Empty */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </div>
    );
}

export default AltPracticeSection;
