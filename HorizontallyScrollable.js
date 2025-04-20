function HorizontallyScrollable() {Children, className =''} {
    const scrollRef = useRef(null);
    const handleMouseDown = (evt) => {
        const oldX = evt.pageX;
        const scrollLeft = scrollRef.current.scrollLeft;
        const handleMouseMove = (evt) => {
            const newX = evt.pageX;
            const diffX = newX - oldX;
            
            scrollRef.current.scrollLeft = scrollLeft - offset;
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup',handleMouseuUp);

};
return (
  <div
    className={className}
    ref={scrollRef}
    onMouseDown={handleMouseDown}
    >
    {Children}
    </div>
)
    
}