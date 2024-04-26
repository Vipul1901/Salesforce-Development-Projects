import { LightningElement } from 'lwc';
import getPrice from '@salesforce/apex/TicketBooking.getPrice';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TicketBookingComponent extends LightningElement {
    showprice;
    handlesuccess(event){
        const evt = new ShowToastEvent({
            title:'Ticket Booked',
            message: 'Record Id'+event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
    handlechange(event){
        let targetId = event.target.value;
        getPrice({recordId:targetId}) //imperative call
        .then((data)=>{
            this.showprice=data;
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Price Updated',
                    message: 'Concert Price updated',
                    variant: 'success'
                })
            )
        })
        .catch((error)=>{
            this.error=error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Unable to Process',
                    message: 'Concert Price not updated',
                    variant: 'error'
                })
            )
        })
    }
}