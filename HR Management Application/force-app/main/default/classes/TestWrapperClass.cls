public with sharing class TestWrapperClass {
   @AuraEnabled(cacheable=true)
   public static List<Consultant__c> getConsultantDetails(){
    return[select Id, Name, Date_of_Birth__c, Date_of_Joining__c, Email__c, Experience_in_years__c,
    Aadhar_Number__c,Pan_Card__c,Phone__c,Postal_Code__c from Consultant__c];
    }
   @AuraEnabled(cacheable=true)
   public static List<Project__c> getProjectDetails(){
    return[select Id, Name, Client__r.Name, Duration__c,Start_Date__c, End_Date__c, Estimate_Budget__c from 
    Project__c];
   }
   @AuraEnabled(cacheable=true)
   public static List<Client__c> getClientDetails(){
      return[select Id, Name, Website__c, Street_Address__c, City__c, State__c, Postal_Code__c, Phone__c from
      Client__c];
   }
   @AuraEnabled(cacheable=true)
   public static List<Training__c> getTrainingDetails(){
      return[select Id, Name, Training_ID__c, Technology__c, Start_Date__c, End_Date__c from Training__c];
   }

   @AuraEnabled(cacheable=true)
   public static List<Past_Information__c> getPastInfromation(){
    return[ select Id, Name, Company__c, Start_Date__c, End_Date__c from Past_Information__c];
   }
}
