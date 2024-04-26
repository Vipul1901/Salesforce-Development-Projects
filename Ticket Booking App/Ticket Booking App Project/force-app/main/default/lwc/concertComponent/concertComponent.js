import { LightningElement, track, wire } from 'lwc';
import getConcerts from '@salesforce/apex/TicketBooking.getConcerts';
export default class ConcertComponent extends LightningElement {
    concertList;
    @wire(getConcerts) wireConcerts({data, error}){
        if(data){
            this.concertList=data;
            console.log(data);
        }
        else if(error){
            console.log(error);
        }
    }
    @track columns=[{label: 'Name', fieldName:'Name'},
             {label: 'Date of Concert', fieldName:'Date_of_Concert__c'},
             {label: 'Price', fieldName:'Price__c'}];
}