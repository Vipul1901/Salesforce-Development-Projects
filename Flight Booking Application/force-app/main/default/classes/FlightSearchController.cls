public with sharing class FlightSearchController {
    @AuraEnabled(cacheable=true)
        public static List<Airlines__c> searchFlight(String departureAirport, 
        String arrivalAirport, Date departureDate){
            return[select Name, City_from__c, City_to__c, Departure__c, Price__c from Airlines__c
            where City_from__c =: departureAirport and City_to__c =: arrivalAirport and 
            Departure__c =: departureDate];
    }
    @AuraEnabled
    public static void createBooking(Id flightId, String Name, String Email, String Phone,
    String departureAirport, String arrivalAirport, Date departureDate, Decimal Price){
        Booking__c newBooking = new Booking__c();
        newBooking.Airlines__c = flightId;
        newBooking.Name = Name;
        newBooking.Email__c = Email;
        newBooking.Phone_No__c = Phone;
        newBooking.City_from__c = departureAirport;
        newBooking.City_to__c = arrivalAirport;
        newBooking.Departure_Date__c = departureDate;
        newBooking.Price__c = Price;

        try {
            insert newBooking;
            System.debug('Booking record created successfully '+ newBooking.Id);
        } catch (Exception e) {
            System.debug('Error creating booking record'+ e.getMessage());
        }
    }
}