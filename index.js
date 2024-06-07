/**
 * Creates a Promise-based timer that resolves after a specified duration.
 *
 * @param {number} delay The delay in milliseconds.
 * @returns {Promise<void>} A Promise that resolves after the delay.
 */
export function timer(delay) {
    return new Promise((resolve, reject) => {
      if (delay <= 0) {
        reject(new Error('Delay must be a positive number'));
      } else {
        setTimeout(() => {
          resolve();
        }, delay);
      }
    });
}
/**
 * Delays the execution of a function by a specified amount of time.
 *
 * @param {number} time - The time in milliseconds to delay the execution.
 * @param {Function} fn - The function to be executed after the delay.
 * @return {Promise} A Promise that resolves when the function is executed.
 */
export function delay(time, fn) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, time);
    });
}
