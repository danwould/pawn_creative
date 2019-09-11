import StickyEvents from 'sticky-events';

const isSticky = (elementToChange, className) => {
    // Create new StickyEvents instance
    const stickyEvents = new StickyEvents();

    // Add event listeners
    const {stickyElements} = stickyEvents;

    stickyElements.forEach(sticky => {
        sticky.addEventListener(StickyEvents.STUCK, () => {
            elementToChange.classList.add(className);
        });
        sticky.addEventListener(StickyEvents.UNSTUCK, () => {
            elementToChange.classList.remove(className);
        });
    });
};

export default isSticky;
