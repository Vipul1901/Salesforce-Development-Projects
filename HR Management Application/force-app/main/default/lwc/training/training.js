import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Training extends NavigationMixin(LightningElement) {
    trainingId;
    redirect=true;
    handleSuccess(event){
        event.preventDefault();
        this.trainingId=event.detail.id;
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'New Training record created',
            variant: 'success'
        })
        this.dispatchEvent(evt);

        if(this.redirect==true){
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes:{
                    recordId: this.trainingId,
                    objectApiName: 'Training__c',
                    actionName: 'view'
                },
            });
        }
    }
    handleBack(){
        let cmpDef={
            componentDef: 'c:displayMultipleFields'
        };
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url:"/one/one.app#" + encodedDef
            }
        });
    }
}