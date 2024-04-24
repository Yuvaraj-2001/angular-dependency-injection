
import { Logs } from './logs';


export const legacyLog:Logs = {
    messages: [],
    log(mes){this.messages.push(mes);console.log(mes + 'legaccy', this.messages)}
}