import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ConsultantComponent extends NavigationMixin(LightningElement) {
    @api consultantId;
    redirect=true;
    handleChange(event){
        let targetId=event.target.value;
        console.log('targetId: '+targetId);
        const evt = new ShowToastEvent({
            title: 'Data loaded',
            message: 'Lookup Data Loading Successfully',
            variant: 'Success'
        });
        this.dispatchEvent(evt);
    }
    handleSuccess(event){
        event.preventDefault();
        this.consultantId=event.detail.id;

        const evt = new ShowToastEvent({
            title : 'Success',
            message: 'Consultant Record created successfully',
            variant: 'success'
        });
        this.dispatchEvent(evt);

        if(this.redirect == true){
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.consultantId,
                    objectApiName: 'Consultant__c',
                    actionName: 'view'
                },
            });
        }
    }              
        handleBack(){
            let cmpDef={
                componentDef: "c:displayMultipleFields"
            };
            let encodedDef = btoa(JSON.stringify(cmpDef));//details of the component page in Base64 encoded form
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedDef
            }
        });
        }
    }
