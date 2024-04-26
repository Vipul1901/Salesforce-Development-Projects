import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Cab_Reservation__c from '@salesforce/schema/Cab_Reservation__c';
import Name from '@salesforce/schema/Cab_Reservation__c.Name';
import Customer_Name_FIELD from '@salesforce/schema/Cab_Reservation__c.Customer_Name__c';
import Aadhar_Number_FIELD from '@salesforce/schema/Cab_Reservation__c.Aadhar_Number__c';
import Travel_Date_Time_FIELD from '@salesforce/schema/Cab_Reservation__c.Travel_Date_Time__c';
import Number_of_Travellers_FIELD from '@salesforce/schema/Cab_Reservation__c.Number_of_Travellers__c';
import Travel_from_FIELD from '@salesforce/schema/Cab_Reservation__c.Travel_from__c';
import Travel_to_FIELD from '@salesforce/schema/Cab_Reservation__c.Travel_to__c';
import Vehicle_FIELD from '@salesforce/schema/Cab_Reservation__c.Vehicle__c';
import Customer_Email_FIELD from '@salesforce/schema/Cab_Reservation__c.Customer_Email__c';
import Driver_FIELD from '@salesforce/schema/Cab_Reservation__c.Driver__c';
import Driver_Email_FIELD from '@salesforce/schema/Cab_Reservation__c.Driver_Email__c';
import Price_per_Km_FIELD from '@salesforce/schema/Cab_Reservation__c.Price_per_Km__c';



export default class CabReservation extends LightningElement {
    objectApiName = Cab_Reservation__c;
    fields = [Name, Customer_Name_FIELD, Aadhar_Number_FIELD, Travel_Date_Time_FIELD,
        Number_of_Travellers_FIELD, Travel_from_FIELD, Travel_to_FIELD, Vehicle_FIELD,
        Customer_Email_FIELD, Driver_FIELD, Driver_Email_FIELD, Price_per_Km_FIELD];
        @track showModal = false;
        @track recordId;
        handleSubmit(event){
            const toast = new ShowToastEvent({
                title: 'Success',
                message: 'Cab booking successful! Enjoy your ride!',
                variant: 'success'
            });
            this.dispatchEvent(toast);
        }
        handleSuccess(event){
            this.recordId = event.detail.id;
            this.showModal = true;
        }
        closeModal(){
            this.showModal = false;
        }
}