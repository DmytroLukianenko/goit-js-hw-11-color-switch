import colors from './colors.js'
import { randomIntegerFromInterval } from './randomNum.js'
import { refs } from './refs.js'

export const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;
        this.changeColor = setInterval(() => {
            const min = 0;
            const max = colors.length - 1
            let i = randomIntegerFromInterval(min, max);
            refs.body.style.backgroundColor = colors[i]
        }, 1000);
    },
    stop() {
        clearInterval(this.changeColor)
        this.isActive = false;
    }
}