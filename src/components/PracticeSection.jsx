import React from 'react'
import ChatCard from './ChatCard';

const PracticeSection = ({
    title = "Unlimited Practice session",
    description = "For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7."
}) => {
    return (
        <div className="bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid layout: 2x2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Box 1: Top Left - Content section */}
                    <div className="flex flex-col gap-[15px] w-full p-4">
                        <h1 className="text-[44px] font-semibold text-black">
                            {title}
                        </h1>

                        <p className="text-[22px] leading-[33px] text-[#4b4b4b]">
                            {description}
                        </p>
                    </div>

                    {/* Box 2: Top Right - Empty */}
                    <div className="hidden lg:block"></div>

                    {/* Box 3: Bottom Left - Empty */}
                    <div className="hidden lg:block"></div>

                    {/* Box 4: Bottom Right - ChatCard section */}
                    <div className="w-full lg:col-span-2 flex justify-end">
                        <div className="w-full lg:w-[1000px]">
                            <ChatCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PracticeSection;