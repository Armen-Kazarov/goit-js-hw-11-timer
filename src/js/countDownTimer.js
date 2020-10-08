export class CountdownTimer{
  constructor({selector,targetDate}) {
    this.targetDate = targetDate;
    this.time = targetDate - Date.now();
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);
  };

  setValueToTimer() {
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
    this.days.textContent  = Math.floor(this.time / (1000 * 60 * 60 * 24));
    /*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
    this.hours.textContent  = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    /*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
    this.mins.textContent  = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    /*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
    this.secs.textContent  = Math.floor((this.time % (1000 * 60)) / 1000);
  };

  timerInit() {
    setInterval(() => {
      this.time = this.targetDate - Date.now();

      if (this.time === this.targetDate) {
        this.time = 0;
      }
      this.setValueToTimer()
    }, 1000);
  };
}
