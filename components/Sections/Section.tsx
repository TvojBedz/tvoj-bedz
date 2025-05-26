import React from 'react'

interface SectionProps {
    sectionId: string;
    title?: string;
    children: React.ReactNode;
}

const Section = ({ sectionId, title, children }: SectionProps) => {
    return (
        <section
            className="px-4 mt-4 max-w-5xl  py-10 flex flex-col items-center justify-center text-gray-900 md:h-screen gap-6 text-center"
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