import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'
import { Button } from './button'

interface IconButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
    tooltip: string;
    additionalClass?: string;
}

const IconButton = ({ icon, onClick, tooltip, additionalClass }: IconButtonProps) => {

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={onClick}
                    className={`w-8 h-8 rounded-full ${additionalClass}`}
                >
                    {icon}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                {tooltip}
            </TooltipContent>
        </Tooltip>
    )
}

export default IconButton