public with sharing class TicketBooking {
    @AuraEnabled(cacheable=true)
    public static List<Concert__c> getConcerts(){
       return [select Id, Name, Date_of_Concert__c, Price__c from Concert__c
        where 	Date_of_Concert__c > Today order by Date_of_Concert__c ASC ];
    }
   @AuraEnabled(cacheable=true)
   public static Decimal getPrice(Id recordId){
    System.debug('inside method');
    Decimal concerts = 
    [select Id, 
    Name, 
    Date_of_Concert__c, 
    Price__c from Concert__c 
    where Id=:recordId ].Price__c;

    return concerts;
   }
}
