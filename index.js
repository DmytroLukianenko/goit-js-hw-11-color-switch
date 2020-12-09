
import { refs } from './js/refs.js'
import { timer } from './js/timer.js'

refs.btnOn.addEventListener('click', timer.start.bind(timer))
refs.btnOff.addEventListener('click', timer.stop.bind(timer))
