import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import validateCredentials from '@salesforce/apex/CabCustomerController.validateCredentials';

export default class Customersignin extends LightningElement {
    @track username;
    @track password;

    handleUsernameChange(event){
        this.username = event.target.value;
    }
    handlePasswordChange(event){
        this.password = event.target.value;
    }
    handleLogin(){
        validateCredentials({username: this.username, password: this.password})
            .then(result=>{
                if(result){
                    let cmpDef = {
                        componentDef:"c:cabLWCWizard"
                    };
                    let encodedDef = btoa(JSON.stringify(cmpDef));
                    this[NavigationMixin.Navigate]({
                        type: "standard__webPage",
                        attributes:{
                            url:"/one/one.app#" + encodedDef
                        }
                    });
                    const evt = new ShowToastEvent({
                        title: 'Success',
                        message: 'Sign in successful',
                        variant: 'success'
                    });
                    this.dispatchEvent(evt);
                }
                else{
                    console.log(result);
                    const evt = new ShowToastEvent({
                        title:'Error',
                        message:'Invalid username or password',
                        variant: 'error'
                    });
                    this.dispatchEvent(evt);
                }
            })
            .catch(error=>{
                console.log(error);
                this.showToast('Error','An error occured','error');
            });
    }
}