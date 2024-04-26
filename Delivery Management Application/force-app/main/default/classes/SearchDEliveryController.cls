public with sharing class SearchDEliveryController {
    @AuraEnabled(cacheable=true)
    public static List<Delivery_Item__c> fetchDelivery(String searchKeyword) {
        String searchKey = searchKeyword + '%';
        List<Delivery_Item__c> returnList = new List<Delivery_Item__c>();
        
        List<Delivery_Item__c> listofAccounts = [Select Id, Name, Quantity__c, Delivery_Item_Status__c, Delivery_Date__c,
        Driver_Name__c, Driver_Phone_Number__c, Delivery_Item_Id__c from Delivery_Item__c where Delivery_Item_Id__c
        like :searchKey LIMIT 500];
        for(Delivery_Item__c acc : listofAccounts){
            returnList.add(acc);
        }
        return returnList;
    }
}