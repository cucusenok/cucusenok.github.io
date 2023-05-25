import { useEffect, RefObject} from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, clickOutsideCallback: () => void) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function clickOutsideHandler(event: MouseEvent) {
            if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
                clickOutsideCallback();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", clickOutsideHandler);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", clickOutsideHandler);
        };
    }, [ref, clickOutsideCallback]);
}

export default useClickOutside;
