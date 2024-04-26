import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Customersignup extends NavigationMixin(LightningElement) {
    @track showform = false;
    handleSignUp(){
        this.showform=true;
    }
    handleSignIn(){
        let cmpDef = {
            componentDef: "c:customersignin"
        };
        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes:{
                url:"/one/one.app#"+encodedDef
            }
        });
    }
    handleSuccess(event){
        event.preventDefault();
        const evt = new ShowToastEvent({
            title:'Success',
            message: 'Sign up successful! Welcome to Premium Cab Services',
            variant: 'success'
        });
        this.dispatchEvent(evt);
        let cmpDef = {
            componentDef: "c:customersignin"
        };
        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes:{
                url:"/one/one.app#"+encodedDef
            }
        });
    }
}