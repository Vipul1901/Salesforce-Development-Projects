import { LightningElement } from 'lwc';

export default class CabMap extends LightningElement {
    mapMarkers=[
        {
            location:{
                Street: 'MG Road',
                City: 'Pune',
                State: 'Maharashtra'
            },
            title: "Pune pick-up point",
            Description: 'Premium inter-city cabs: Pune Loaction',
            },
            {
                location:{
                    Street: 'Shivaji Park',
                    City: 'Mumbai',
                    State: 'Maharashtra'
                },
                title: "Mumbai pick-up point",
                Description: 'Premium inter-city cabs: Mumbai Location',
            },
            {
                location:{
                    Street: 'Ganeshwadi',
                    City: 'Nashik',
                    State: 'Maharashtra'
                },
                title: "Nashik pick-up point",
                Description: 'Premium inter-city cabs: Nashik Location',
            },
            {
                location:{
                    Street: 'Indira Gandhi Medical College',
                    City: 'Nagpur',
                    State: 'Maharashtra'
                },
                title: "Nagpur pick-up point",
                Description: 'Premium inter-city cabs: Nagpur Location',
            }
        ]
        markersTitle= 'Coordinates for Centering';
        center={
            location: {Latitude: '19.8296893', Longitude: '75.88003049999998'},
        };
    }
