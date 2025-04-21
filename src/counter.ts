export function setupCounter(element: HTMLButtonElement) {
  let count = 0;
  const setCounter = (count: number) => {
    element.innerText = `count is ${count}`;
  };
  element.addEventListener('click', () => {
    count++;
    setCounter(count);
  });
  setCounter(count);
}
