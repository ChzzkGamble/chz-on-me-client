import { useState } from "react";

export function useCreateElement() {
    const [element, setElement] = useState<React.ReactElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const open = (overlayElement: React.ReactElement) => {
        setElement(overlayElement);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const exit = () => {  
        setElement(null);
        setIsOpen(false);
    };

    return {
        element: isOpen ? element : null,
        open,
        close,
        exit
    };
}
