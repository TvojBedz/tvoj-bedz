import React from 'react'

interface SectionProps {
    sectionId: string;
    title?: string;
    fullScreen?: boolean;
    children: React.ReactNode;
}

const Section = ({ sectionId, title, fullScreen, children }: SectionProps) => {
    const className = `px-4 max-w-5xl py-10 flex flex-col items-center text-gray-900 gap-6 text-center ${fullScreen ? 'h-screen justify-center' : ''}`;

    return (
        <section
            className={className}
            id={sectionId}
        >
            {title &&
                <h2 className="text-4xl font-bold mb-2">
                    {title}
                </h2>
            }

            {children}
        </section>
    )
}

export default Section