import { useEffect, useRef, useState } from "react";

function ResizablePanels({ left, right }) {
  const [split, setSplit] = useState(66);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const onMove = (event) => {
      if (!draggingRef.current || !containerRef.current) {
        return;
      }

      const bounds = containerRef.current.getBoundingClientRect();
      const nextSplit = ((event.clientX - bounds.left) / bounds.width) * 100;
      setSplit(Math.min(78, Math.max(45, nextSplit)));
    };

    const onUp = () => {
      draggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const startDragging = () => {
    draggingRef.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  return (
    <div
      ref={containerRef}
      className="grid min-h-[430px] gap-3 xl:grid-cols-[minmax(0,var(--left))_8px_minmax(320px,var(--right))]"
      style={{
        "--left": `${split}fr`,
        "--right": `${100 - split}fr`,
      }}
    >
      <div className="min-w-0">{left}</div>
      <button
        type="button"
        aria-label="Resize panels"
        onPointerDown={startDragging}
        className="hidden cursor-col-resize rounded-full bg-gradient-to-b from-[#11365d] via-[#2b83ff] to-[#11365d] opacity-70 transition hover:opacity-100 xl:block"
      />
      <div className="min-w-0">{right}</div>
    </div>
  );
}

export default ResizablePanels;
