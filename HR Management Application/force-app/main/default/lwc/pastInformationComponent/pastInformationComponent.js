import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PastInformationComponent extends NavigationMixin(LightningElement) {
    pastInfoId;
    redirect=true;
    handleSuccess(event){
        event.preventDefault();
        this.pastInfoId=event.detail.id;

        const evt=new ShowToastEvent({
            title:'success',
            message:'New past information record created',
            variant:'success'
        });
        this.dispatchEvent(evt);

        if(this.redirect==true){
            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes:{
                    recordId: this.pastInfoId,
                    objectApiName: 'Past_Information__c',
                    actionName: 'view'
                },
            });
        }
    }               
        handleback(){
            let cmpDef={
                componentDef:"c:displayMultipleFields"
            };
            let encodeDef=btoa(JSON.stringify(cmpDef));
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes:{
                    url:"/one/one.app#"+encodeDef
                },
            });
    }  
}