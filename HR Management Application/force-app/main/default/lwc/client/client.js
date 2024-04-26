import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Client extends NavigationMixin(LightningElement) {
    clientId;
    redirect=true;
    handleSuccess(event){
        event.preventDefault();
        this.clientId=event.detail.id;
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Client created successfully',
            variant: 'success'
        });
        this.dispatchEvent(evt);
        if(this.redirect==true){
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes:{
                    recordId: this.clientId,
                    objectApiName: 'Client__c',
                    actionName: 'view'
                },
            });
        }
        
    }
    handleBack(){
        let cmpDef={
            componentDef: "c:displayMultipleFields"
        };
        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"/one/one.app#" + encodedDef
            }
        });
    }
}