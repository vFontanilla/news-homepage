import { createPortal } from "react-dom";

export function RenderElementOutsideTree() {
    return (
        <div className="flex flex-col items-center text-center">
            <p>This child is placed in the parent div</p>
            {createPortal(
                <p>This is placed in the document body.</p>,
                document.getElementById("modal")
            )}
            <button className="mt-5">This is the last button</button>
        </div>
    );
}
