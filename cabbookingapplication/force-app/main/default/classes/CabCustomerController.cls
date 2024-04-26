public with sharing class CabCustomerController {
    @AuraEnabled(cacheable=true)
    public static Boolean validateCredentials(String username, String password){
        Boolean result;
        if(username==null||password==null){
            result=false;
        }
        List<Cab_Customer__c> conList = [select Id, Username__c, Password__c from 
        Cab_Customer__c where Username__c =: username Limit 1];
        if(conList.size()==0)
        {
            result=false;
        }
        else {
            if(conList[0].Password__c==password){
                result=true;
            }
            else{
                result=false;
            }
        }
        return result;
    }
}
     