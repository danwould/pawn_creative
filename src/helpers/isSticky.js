import StickyEvents from 'sticky-events';

const isSticky = (elementToChange, className) => {
    // Create new StickyEvents instance
    const stickyEvents = new StickyEvents();

    // Add event listeners
    const {stickyElements} = stickyEvents;

    stickyElements.forEach(sticky => {
        sticky.addEventListener(StickyEvents.CHANGE, () => {
            elementToChange.classList.toggle(className);
        });
    });
};

export default isSticky;
