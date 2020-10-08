import './styles.css';
import  { CountdownTimer } from './js/countDownTimer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});

timer.timerInit();
