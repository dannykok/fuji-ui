// simulate a mouse event programatically towards a htmlelement
export const useMouseEvent = eventType => {
  const event = document.createEvent('MouseEvents');
  event.initEvent(eventType, true, true);
  return HTMLElement => HTMLElement.dispatchEvent(event);
};
