import { LightningElement, track } from 'lwc';

export default class CabLWCWizard extends LightningElement {
    @track currentStep = '1';
    handleOnStepClick(event){
        this.currentStep = event.target.value;
    }
    get isStepOne(){
        return this.currentStep==="1";
    }
    get isStepTwo(){
        return this.currentStep==="2";
    }
    get isStepThree(){
        return this.currentStep==="3";
    }
    handleNext(){
        if(this.currentStep=="1"){
            this.currentStep=="2";
        }
        else if(this.currentStep="2"){
            this.currentStep="3";
        }    
    }
    handlePrev(){
        if(this.currentStep == "3"){
            this.currentStep=="2";
        }
        else if(this.currentStep="2"){
            this.currentStep=="1";
        }
    }
    handleFinish(){
        if(this.currentStep == "3"){
            this.currentStep=="1";
        }
    }
}