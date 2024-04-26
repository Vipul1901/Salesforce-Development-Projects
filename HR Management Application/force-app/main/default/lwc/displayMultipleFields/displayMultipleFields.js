import { LightningElement, track } from 'lwc';
import getConsultantDetails from '@salesforce/apex/TestWrapperClass.getConsultantDetails';
/*import getPastInformation from '@salesforce/apex/TestWrapperClass.getPastInformation';*/
import getProjectDetails from '@salesforce/apex/TestWrapperClass.getProjectDetails';
import { NavigationMixin } from 'lightning/navigation';
export default class DisplayMultipleFields extends NavigationMixin(LightningElement) {
    @track showConsultant=false;
    @track consultant = [];

    @track showProjects=false;
    @track Project = [];

    @track showClient=false;
    @track Client = [];

    @track showTraining=false;
    @track Training = [];

    @track showPastInfo=false;
    @track pastInfo = [];

    navigateToConsultant(event){
        let cmpDef={
            componentDef:'c:consultantComponent'
        };
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url: "/one/one.app#"+encodedDef
            },
        });
    }
    navigateToConsultantData(){
        getConsultantDetails()
        .then(result=>{
            this.consultant=result;
            this.showConsultant=true;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    hideConData(){
        console.log('closing button');
         this.showConsultant = false;
    }


    navigateToProject(event){
        let cmpDef={
            componentDef:'c:Project'
        };
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url: "/one/one.app#"+encodedDef
            },
        });
    }
    navigateToProjectData(){
        getProjectDetails()
        .then(result=>{
            this.Project=result;
            this.showProjects=true;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    hideProjectData(){
        console.log('closing button');
        this.showProjects=false;
    }

    navigateToClient(event){
        let cmpDef={
            componentDef:'c:Client'
        };
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url: "/one/one.app#"+encodedDef
            },
        });
    }
    navigateToClientData(){
        getClientDetails()
        .then(result=>{
            this.Client = result;
            this.showClient = true;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    hideClientData(){
        console.log('closing button');
        this.showClient=false;
    } 
    
    
    navigateToTraining(event){
        let cmpDef={
            componentDef:'c:Training'
        };
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url: "/one/one.app#"+encodedDef
            },
        });
    }
    navigateToTrainingData(){
        getTrainingDetails()
            .then(result=>{
                this.Training=result;
                this.showTraining=true;
            })
            .catch(error=>{
                console.log(error);
            })
        }
    hideTrainingData(){
        console.log('closing button');
        this.showTraining=false;
    }
    navigateToPastInfo(event){
        let cmpDef={
            componentDef:'c:pastInformationComponent'
        };
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url: "/one/one.app#"+encodedDef
            },
        });
    }
    
    navigateToPastInfoData(){
        getPastInfromation()
            .then(result=>{
                this.pastInfo=result;
                this.showPastInfo=true;
            })
            .catch(error=>{
                console.log(error);
            })
        }
    hidePastData(){
        console.log('Close button');
        this.showPastInfo=false;
    }
} 