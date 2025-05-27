import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'
import { Button } from './button'

interface IconButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
    tooltip: string;
    additionalClass?: string;
    disabled?: boolean;
}

const IconButton = ({ icon, onClick, tooltip, additionalClass, disabled }: IconButtonProps) => {

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    size="icon"
                    variant='outline'
                    onClick={onClick}
                    className={`w-5 h-5 rounded-full ${additionalClass}`}
                    disabled={disabled}
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