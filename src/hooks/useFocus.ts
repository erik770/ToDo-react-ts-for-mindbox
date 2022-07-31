import React, {MutableRefObject, useRef} from "react";

export const useFocus: () => [React.MutableRefObject<HTMLInputElement>, () => void] = () => {
    const htmlElRef = useRef() as MutableRefObject<HTMLInputElement>;
    function setFocus() {
        if (htmlElRef.current) htmlElRef.current.focus()
    }

    return [ htmlElRef, setFocus ]
}