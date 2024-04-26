import { LightningElement, track } from 'lwc';
import fetchDelivery from '@salesforce/apex/SearchDEliveryController.fetchDelivery';

export default class SearchDelivery extends LightningElement {
    deliveryId;
    @track records;
    handleDeliveryIdChange(event){
        this.deliveryId = event.target.value;
    }
    handleSearch(){
        fetchDelivery({searchKeyword:this.deliveryId})
            .then(result=>{
                this.records = result;
            })
            .catch(error=>{
                this.records = error;
            })
    }
    cols=[
        {label:'Item Name', fieldName:'Name', type:'text'},
        {label:'Item Status', fieldName:'Delivery_Item_Status__c', type:'Picklist'},
        {label:'Delivery Date', fieldName:'Delivery_Date__c', type:'Date'}
    ]
}