import { LightningElement } from 'lwc';
export default class simplwc extends LightningElement {
    name = 'Have Fun Solving'
    connectedCallback() {
        console.log('came into connectedCallback')
    }
}