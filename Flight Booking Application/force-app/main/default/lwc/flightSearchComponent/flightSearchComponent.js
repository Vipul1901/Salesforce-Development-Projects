import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchFlight from '@salesforce/apex/FlightSearchController.searchFlight';
import createBooking from '@salesforce/apex/FlightSearchController.createBooking';

export default class FlightSearchComponent extends LightningElement {
    @track departureAirport;

    @track arrivalAirport;

    @track departureDate;

    @track flight;

    @track selectedFlight;
    
    @track Name;
    @track Email;
    @track Phone;
    @track Price;

    @track showBookingModal = false;
    @track showFlights = false;


    handleDepartureAirportChange(event){
        this.departureAirport = event.target.value;
    }
    handleArrivalAirportChange(event){
        this.arrivalAirport = event.target.value;
    }
    handleDepartureDateChange(event){
        this.departureDate = event.target.value;
    }
    handleSearchFlight(){
        searchFlight({
        departureAirport:this.departureAirport,
        arrivalAirport:this.arrivalAirport,
        departureDate:this.departureDate,
        })
        .then(result=>{
            this.flight = result;
            this.showFlights = true;
        })
        .catch(error=>{
            console.log(error);
        });
    }
    handleBookNow(event){
        const flightId = event.currentTarget.dataset.flightId;
        this.selectedFlight = this.flight.find(flight=>flight.Id===flightId);
        this.showBookingModal=true;
    }
    handleCloseBookingModal(){
        this.showBookingModal = false;
        this.selectedFlight = null;
        this.Name = null;
        this.Email = null;
        this.Phone=null;
    }
    handleNameChange(event){
        this.Name = event.target.value;
    }
    handleEmailChange(event){
        this.Email = event.target.value;
    }
    handlePhoneChange(event){
        this.Phone = event.target.value;
    }
    showSuccessToast(){
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Booking record created successfully',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
    handleConfirmBooking(){
        createBooking({
            flightId:this.selectedFlight.Id,
            Name: this.Name,
            Email: this.Email,
            Phone: this.Phone,
            departureAirport: this.selectedFlight.City_from__c,
            arrivalAirport: this.selectedFlight.City_to__c,
            departureDate: this.selectedFlight.Departure_Date__c,
            Price: this.selectedFlight.Price__c
        })
        .then(result=>{
            console.log(JSON.stringify(result));
            this.showSuccessToast();
            this.showBookingModal = false;
        })
        .catch(error=>{
            console.log(error);
        });
    }
}