// ExampleNav testResponse['trips']['tripOption'][0]['pricing'][0]['saleTotal']
testRequest = 
{

    "passengers": {
      "adultCount": 1
    },
    "slice": [
      {
        "origin": "BOS",
        "destination": "LAX",
        "date": "2016-07-01", 
        //"maxStops": 1
      },
      {
        "origin": "LAX",
        "destination": "BOS",
        "date": "2016-07-02"
      }
    ]
  
}


testResponse = {
 "kind": "qpxExpress#tripsSearch",
 "trips": {
  "kind": "qpxexpress#tripOptions",
  "requestId": "ruKmNnHTJR07QaRO80OUN4",
  "data": {
   "kind": "qpxexpress#data",
   "airport": [
    {
     "kind": "qpxexpress#airportData",
     "code": "DAL",
     "city": "DFW",
     "name": "Dallas Love Field"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "DFW",
     "city": "DFW",
     "name": "Dallas/Fort Worth International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "LAX",
     "city": "LAX",
     "name": "Los Angeles International"
    }
   ],
   "city": [
    {
     "kind": "qpxexpress#cityData",
     "code": "DFW",
     "name": "Dallas/Fort Worth"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "LAX",
     "name": "Los Angeles"
    }
   ],
   "aircraft": [
    {
     "kind": "qpxexpress#aircraftData",
     "code": "319",
     "name": "Airbus A319"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "320",
     "name": "Airbus A320"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "777",
     "name": "Boeing 777"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "CR7",
     "name": "Canadair RJ 700"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "E7W",
     "name": "Embraer RJ-175"
    }
   ],
   "tax": [
    {
     "kind": "qpxexpress#taxData",
     "id": "ZP",
     "name": "US Flight Segment Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "AY_001",
     "name": "US September 11th Security Fee"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "US_001",
     "name": "US Transportation Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "XF",
     "name": "US Passenger Facility Charge"
    }
   ],
   "carrier": [
    {
     "kind": "qpxexpress#carrierData",
     "code": "AS",
     "name": "Alaska Airlines Inc."
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "NK",
     "name": "Spirit Airlines"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "UA",
     "name": "United Airlines, Inc."
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "VX",
     "name": "Virgin America Inc."
    }
   ]
  },
  "tripOption": [
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD246.20",
    "id": "Jdha4xUQivPMBakcporFS0001",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 190,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 190,
        "flight": {
         "carrier": "NK",
         "number": "867"
        },
        "id": "GGVommrGUL7qtq-g",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lq6XkmbmIAuYn8uK",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T07:14-07:00",
          "departureTime": "2016-07-27T06:04-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "3",
          "duration": 190,
          "onTimePerformance": 80,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 181,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 181,
        "flight": {
         "carrier": "NK",
         "number": "868"
        },
        "id": "GHhKd0+9nueZDMb2",
        "cabin": "COACH",
        "bookingCode": "U",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LDuqX8nClNArlaVY",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T23:19-05:00",
          "departureTime": "2016-07-29T18:18-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "3",
          "destinationTerminal": "E",
          "duration": 181,
          "onTimePerformance": 60,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "carrier": "NK",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "RA14NR"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AaCyQfoSBGipVOPi9ARQj96G1uD2PDUBeORPgG9yubcY",
        "carrier": "NK",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "UA21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AaCyQfoSBGipVOPi9ARQj96G1uD2PDUBeORPgG9yubcY",
        "segmentId": "GHhKd0+9nueZDMb2"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "segmentId": "GGVommrGUL7qtq-g"
       }
      ],
      "baseFareTotal": "USD202.78",
      "saleFareTotal": "USD202.78",
      "saleTaxTotal": "USD43.42",
      "saleTotal": "USD246.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD15.22"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW NK LAX Q18.60 Q4.65 73.49RA14NR NK DFW Q27.91 Q18.60 Q4.65 54.88UA21NR USD 202.78 END ZP DFW LAX XT 15.22US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T04:02-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD246.20",
    "id": "Jdha4xUQivPMBakcporFS0002",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 193,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 193,
        "flight": {
         "carrier": "NK",
         "number": "869"
        },
        "id": "GXlTd4BLLRkTdMMn",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L6hJXMPlvyCnJa81",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T17:23-07:00",
          "departureTime": "2016-07-27T16:10-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "3",
          "duration": 193,
          "onTimePerformance": 80,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 181,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 181,
        "flight": {
         "carrier": "NK",
         "number": "868"
        },
        "id": "GHhKd0+9nueZDMb2",
        "cabin": "COACH",
        "bookingCode": "U",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LDuqX8nClNArlaVY",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T23:19-05:00",
          "departureTime": "2016-07-29T18:18-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "3",
          "destinationTerminal": "E",
          "duration": 181,
          "onTimePerformance": 60,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "carrier": "NK",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "RA14NR"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AaCyQfoSBGipVOPi9ARQj96G1uD2PDUBeORPgG9yubcY",
        "carrier": "NK",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "UA21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "segmentId": "GXlTd4BLLRkTdMMn"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AaCyQfoSBGipVOPi9ARQj96G1uD2PDUBeORPgG9yubcY",
        "segmentId": "GHhKd0+9nueZDMb2"
       }
      ],
      "baseFareTotal": "USD202.78",
      "saleFareTotal": "USD202.78",
      "saleTaxTotal": "USD43.42",
      "saleTotal": "USD246.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD15.22"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW NK LAX Q18.60 Q4.65 73.49RA14NR NK DFW Q27.91 Q18.60 Q4.65 54.88UA21NR USD 202.78 END ZP DFW LAX XT 15.22US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T04:02-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD266.20",
    "id": "Jdha4xUQivPMBakcporFS0003",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 190,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 190,
        "flight": {
         "carrier": "NK",
         "number": "867"
        },
        "id": "GGVommrGUL7qtq-g",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lq6XkmbmIAuYn8uK",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T07:14-07:00",
          "departureTime": "2016-07-27T06:04-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "3",
          "duration": 190,
          "onTimePerformance": 80,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 184,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 184,
        "flight": {
         "carrier": "NK",
         "number": "866"
        },
        "id": "GCwVWjsgJUuLBiRa",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LEF9ZbMX8Nl3KEyV",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T15:20-05:00",
          "departureTime": "2016-07-29T10:16-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "3",
          "destinationTerminal": "E",
          "duration": 184,
          "onTimePerformance": 60,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "carrier": "NK",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "RA14NR"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "carrier": "NK",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "RA14NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "segmentId": "GGVommrGUL7qtq-g"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "segmentId": "GCwVWjsgJUuLBiRa"
       }
      ],
      "baseFareTotal": "USD221.39",
      "saleFareTotal": "USD221.39",
      "saleTaxTotal": "USD44.81",
      "saleTotal": "USD266.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD16.61"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW NK LAX Q18.60 Q4.65 73.49RA14NR NK DFW Q27.91 Q18.60 Q4.65 73.49RA14NR USD 221.39 END ZP DFW LAX XT 16.61US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T04:02-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD266.20",
    "id": "Jdha4xUQivPMBakcporFS0004",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 193,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 193,
        "flight": {
         "carrier": "NK",
         "number": "869"
        },
        "id": "GXlTd4BLLRkTdMMn",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L6hJXMPlvyCnJa81",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T17:23-07:00",
          "departureTime": "2016-07-27T16:10-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "3",
          "duration": 193,
          "onTimePerformance": 80,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 184,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 184,
        "flight": {
         "carrier": "NK",
         "number": "866"
        },
        "id": "GCwVWjsgJUuLBiRa",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LEF9ZbMX8Nl3KEyV",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T15:20-05:00",
          "departureTime": "2016-07-29T10:16-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "3",
          "destinationTerminal": "E",
          "duration": 184,
          "onTimePerformance": 60,
          "mileage": 1231,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "carrier": "NK",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "RA14NR"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "carrier": "NK",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "RA14NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "segmentId": "GXlTd4BLLRkTdMMn"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Aj2xMvIEetNlC8cgKYyBZpbqHE+l0to/6xxNsq3mUaIA",
        "segmentId": "GCwVWjsgJUuLBiRa"
       }
      ],
      "baseFareTotal": "USD221.39",
      "saleFareTotal": "USD221.39",
      "saleTaxTotal": "USD44.81",
      "saleTotal": "USD266.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD16.61"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW NK LAX Q18.60 Q4.65 73.49RA14NR NK DFW Q27.91 Q18.60 Q4.65 73.49RA14NR USD 221.39 END ZP DFW LAX XT 16.61US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T04:02-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS000B",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "885"
        },
        "id": "GObunTkaBranVL0B",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lt++A-hOjqIKemZ8",
          "aircraft": "319",
          "arrivalTime": "2016-07-27T19:45-07:00",
          "departureTime": "2016-07-27T18:45-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 33,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "874"
        },
        "id": "G8+culfq0OcZYSEj",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LLl5gBuYu5JSYk2u",
          "aircraft": "319",
          "arrivalTime": "2016-07-29T16:55-05:00",
          "departureTime": "2016-07-29T11:50-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 75,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "G8+culfq0OcZYSEj"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GObunTkaBranVL0B"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS0006",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "871"
        },
        "id": "GTGdgjyEUpIMD-Hs",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lld63U14zLZO8NZw",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T08:50-07:00",
          "departureTime": "2016-07-27T07:50-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 82,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "882"
        },
        "id": "GPzV-e8ZR20OzGNN",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L36FIb-RjdOSNZtv",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T22:25-05:00",
          "departureTime": "2016-07-29T17:20-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 84,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GTGdgjyEUpIMD-Hs"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "GPzV-e8ZR20OzGNN"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS0005",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "885"
        },
        "id": "GObunTkaBranVL0B",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lt++A-hOjqIKemZ8",
          "aircraft": "319",
          "arrivalTime": "2016-07-27T19:45-07:00",
          "departureTime": "2016-07-27T18:45-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 33,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "882"
        },
        "id": "GPzV-e8ZR20OzGNN",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L36FIb-RjdOSNZtv",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T22:25-05:00",
          "departureTime": "2016-07-29T17:20-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 84,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "GPzV-e8ZR20OzGNN"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GObunTkaBranVL0B"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS000D",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "883"
        },
        "id": "GLK4dYP5GiHJN4LK",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lon3W6hRUFVu9yo1",
          "aircraft": "319",
          "arrivalTime": "2016-07-27T15:40-07:00",
          "departureTime": "2016-07-27T14:40-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 33,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "874"
        },
        "id": "G8+culfq0OcZYSEj",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LLl5gBuYu5JSYk2u",
          "aircraft": "319",
          "arrivalTime": "2016-07-29T16:55-05:00",
          "departureTime": "2016-07-29T11:50-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 75,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "G8+culfq0OcZYSEj"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GLK4dYP5GiHJN4LK"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS000A",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "883"
        },
        "id": "GLK4dYP5GiHJN4LK",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lon3W6hRUFVu9yo1",
          "aircraft": "319",
          "arrivalTime": "2016-07-27T15:40-07:00",
          "departureTime": "2016-07-27T14:40-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 33,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "872"
        },
        "id": "GhiGk2Uy47lwHDhc",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LP4pbEcd1fGshUqS",
          "aircraft": "319",
          "arrivalTime": "2016-07-29T13:30-05:00",
          "departureTime": "2016-07-29T08:25-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 91,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "GhiGk2Uy47lwHDhc"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GLK4dYP5GiHJN4LK"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS0009",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "871"
        },
        "id": "GTGdgjyEUpIMD-Hs",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lld63U14zLZO8NZw",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T08:50-07:00",
          "departureTime": "2016-07-27T07:50-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 82,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "872"
        },
        "id": "GhiGk2Uy47lwHDhc",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LP4pbEcd1fGshUqS",
          "aircraft": "319",
          "arrivalTime": "2016-07-29T13:30-05:00",
          "departureTime": "2016-07-29T08:25-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 91,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "GhiGk2Uy47lwHDhc"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GTGdgjyEUpIMD-Hs"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS0008",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "885"
        },
        "id": "GObunTkaBranVL0B",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lt++A-hOjqIKemZ8",
          "aircraft": "319",
          "arrivalTime": "2016-07-27T19:45-07:00",
          "departureTime": "2016-07-27T18:45-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 33,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "872"
        },
        "id": "GhiGk2Uy47lwHDhc",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LP4pbEcd1fGshUqS",
          "aircraft": "319",
          "arrivalTime": "2016-07-29T13:30-05:00",
          "departureTime": "2016-07-29T08:25-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 91,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "GhiGk2Uy47lwHDhc"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GObunTkaBranVL0B"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS0007",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "883"
        },
        "id": "GLK4dYP5GiHJN4LK",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lon3W6hRUFVu9yo1",
          "aircraft": "319",
          "arrivalTime": "2016-07-27T15:40-07:00",
          "departureTime": "2016-07-27T14:40-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 33,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "882"
        },
        "id": "GPzV-e8ZR20OzGNN",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L36FIb-RjdOSNZtv",
          "aircraft": "320",
          "arrivalTime": "2016-07-29T22:25-05:00",
          "departureTime": "2016-07-29T17:20-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 84,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "GPzV-e8ZR20OzGNN"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GLK4dYP5GiHJN4LK"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD290.20",
    "id": "Jdha4xUQivPMBakcporFS000C",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 180,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "VX",
         "number": "871"
        },
        "id": "GTGdgjyEUpIMD-Hs",
        "cabin": "COACH",
        "bookingCode": "L",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lld63U14zLZO8NZw",
          "aircraft": "320",
          "arrivalTime": "2016-07-27T08:50-07:00",
          "departureTime": "2016-07-27T07:50-05:00",
          "origin": "DAL",
          "destination": "LAX",
          "originTerminal": "1",
          "destinationTerminal": "3",
          "duration": 180,
          "onTimePerformance": 82,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 185,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 185,
        "flight": {
         "carrier": "VX",
         "number": "874"
        },
        "id": "G8+culfq0OcZYSEj",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LLl5gBuYu5JSYk2u",
          "aircraft": "319",
          "arrivalTime": "2016-07-29T16:55-05:00",
          "departureTime": "2016-07-29T11:50-07:00",
          "origin": "LAX",
          "destination": "DAL",
          "originTerminal": "3",
          "destinationTerminal": "1",
          "duration": 185,
          "onTimePerformance": 75,
          "mileage": 1243,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "carrier": "VX",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "L21TWSSL"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "M21NR"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A+FphPzRTZvbuvrWDZPrnErEWxFYhqeeFHTNLAMasHg2",
        "segmentId": "G8+culfq0OcZYSEj"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AJbH039dSH7RfmlTtwscoxp+9DTqGycBijb/to8ag/vk",
        "segmentId": "GTGdgjyEUpIMD-Hs"
       }
      ],
      "baseFareTotal": "USD243.72",
      "saleFareTotal": "USD243.72",
      "saleTaxTotal": "USD46.48",
      "saleTotal": "USD290.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.28"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW VX LAX 96.74L21TWSSL VX DFW 146.98M21NR USD 243.72 END ZP DAL LAX XT 18.28US 8.00ZP 11.20AY 9.00XF DAL4.50 LAX4.50",
      "latestTicketingTime": "2016-06-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD344.20",
    "id": "Jdha4xUQivPMBakcporFS000E",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 202,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 202,
        "flight": {
         "carrier": "UA",
         "number": "5739"
        },
        "id": "GeuZj88zOMsY0cRz",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LLekmbBxLIJi-6tK",
          "aircraft": "CR7",
          "arrivalTime": "2016-07-27T18:02-07:00",
          "departureTime": "2016-07-27T16:40-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "7",
          "duration": 202,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 195,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 195,
        "flight": {
         "carrier": "UA",
         "number": "5614"
        },
        "id": "Gqc93uarOO6D67ZY",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LMm8hjPIx-0PZOOr",
          "aircraft": "CR7",
          "arrivalTime": "2016-07-29T16:00-05:00",
          "departureTime": "2016-07-29T10:45-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "7",
          "destinationTerminal": "E",
          "duration": 195,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "carrier": "UA",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "SAA21AKN"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "SAA21AKN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "segmentId": "Gqc93uarOO6D67ZY"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "segmentId": "GeuZj88zOMsY0cRz"
       }
      ],
      "baseFareTotal": "USD293.96",
      "saleFareTotal": "USD293.96",
      "saleTaxTotal": "USD50.24",
      "saleTotal": "USD344.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD22.04"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW UA LAX 146.98SAA21AKN UA DFW 146.98SAA21AKN USD 293.96 END ZP DFW LAX XT 22.04US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD344.20",
    "id": "Jdha4xUQivPMBakcporFS000F",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 210,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 210,
        "flight": {
         "carrier": "UA",
         "number": "5736"
        },
        "id": "GXWRK5Sj5aYsI-cO",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LkoUCSWbOY+a2rKr",
          "aircraft": "E7W",
          "arrivalTime": "2016-07-27T07:30-07:00",
          "departureTime": "2016-07-27T06:00-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "7",
          "duration": 210,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "onTimePerformance": 90,
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 195,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 195,
        "flight": {
         "carrier": "UA",
         "number": "5614"
        },
        "id": "Gqc93uarOO6D67ZY",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LMm8hjPIx-0PZOOr",
          "aircraft": "CR7",
          "arrivalTime": "2016-07-29T16:00-05:00",
          "departureTime": "2016-07-29T10:45-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "7",
          "destinationTerminal": "E",
          "duration": 195,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "carrier": "UA",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "SAA21AKN"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "SAA21AKN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "segmentId": "GXWRK5Sj5aYsI-cO"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "segmentId": "Gqc93uarOO6D67ZY"
       }
      ],
      "baseFareTotal": "USD293.96",
      "saleFareTotal": "USD293.96",
      "saleTaxTotal": "USD50.24",
      "saleTotal": "USD344.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD22.04"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW UA LAX 146.98SAA21AKN UA DFW 146.98SAA21AKN USD 293.96 END ZP DFW LAX XT 22.04US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD493.20",
    "id": "Jdha4xUQivPMBakcporFS000H",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 210,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 210,
        "flight": {
         "carrier": "UA",
         "number": "5736"
        },
        "id": "GXWRK5Sj5aYsI-cO",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LkoUCSWbOY+a2rKr",
          "aircraft": "E7W",
          "arrivalTime": "2016-07-27T07:30-07:00",
          "departureTime": "2016-07-27T06:00-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "7",
          "duration": 210,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "onTimePerformance": 90,
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 187,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 187,
        "flight": {
         "carrier": "UA",
         "number": "6004"
        },
        "id": "GEwMaF1bnkq8xr6k",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Ljkrmo9f-h4OqEuS",
          "aircraft": "CR7",
          "arrivalTime": "2016-07-29T23:49-05:00",
          "departureTime": "2016-07-29T18:42-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "7",
          "destinationTerminal": "E",
          "duration": 187,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "onTimePerformance": 90,
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "carrier": "UA",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "SAA21AKN"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AR9qntsmTUiB6NBuA7xTnOyNs0ZldGZsFAu+P11jDAcM",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "QAA07AKN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "segmentId": "GXWRK5Sj5aYsI-cO"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AR9qntsmTUiB6NBuA7xTnOyNs0ZldGZsFAu+P11jDAcM",
        "segmentId": "GEwMaF1bnkq8xr6k"
       }
      ],
      "baseFareTotal": "USD432.56",
      "saleFareTotal": "USD432.56",
      "saleTaxTotal": "USD60.64",
      "saleTotal": "USD493.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD32.44"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW UA LAX 146.98SAA21AKN UA DFW 285.58QAA07AKN USD 432.56 END ZP DFW LAX XT 32.44US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD493.20",
    "id": "Jdha4xUQivPMBakcporFS000G",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 202,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 202,
        "flight": {
         "carrier": "UA",
         "number": "5739"
        },
        "id": "GeuZj88zOMsY0cRz",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LLekmbBxLIJi-6tK",
          "aircraft": "CR7",
          "arrivalTime": "2016-07-27T18:02-07:00",
          "departureTime": "2016-07-27T16:40-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "E",
          "destinationTerminal": "7",
          "duration": 202,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 187,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 187,
        "flight": {
         "carrier": "UA",
         "number": "6004"
        },
        "id": "GEwMaF1bnkq8xr6k",
        "cabin": "COACH",
        "bookingCode": "Q",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Ljkrmo9f-h4OqEuS",
          "aircraft": "CR7",
          "arrivalTime": "2016-07-29T23:49-05:00",
          "departureTime": "2016-07-29T18:42-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "7",
          "destinationTerminal": "E",
          "duration": 187,
          "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
          "onTimePerformance": 90,
          "mileage": 1231,
          "meal": "Food and Beverages for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "carrier": "UA",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "SAA21AKN"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AR9qntsmTUiB6NBuA7xTnOyNs0ZldGZsFAu+P11jDAcM",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "QAA07AKN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AR9qntsmTUiB6NBuA7xTnOyNs0ZldGZsFAu+P11jDAcM",
        "segmentId": "GEwMaF1bnkq8xr6k"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A9nG3DKE/UBweRQ7Q1LirKO6XECwJ8eR31sLR20NWDsc",
        "segmentId": "GeuZj88zOMsY0cRz"
       }
      ],
      "baseFareTotal": "USD432.56",
      "saleFareTotal": "USD432.56",
      "saleTaxTotal": "USD60.64",
      "saleTotal": "USD493.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD32.44"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW UA LAX 146.98SAA21AKN UA DFW 285.58QAA07AKN USD 432.56 END ZP DFW LAX XT 32.44US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-06-10T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD2076.20",
    "id": "Jdha4xUQivPMBakcporFS000K",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 192,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 192,
        "flight": {
         "carrier": "AS",
         "number": "1913"
        },
        "id": "Gz-ssctPDCAh0J7t",
        "cabin": "COACH",
        "bookingCode": "Y",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lbn-oODnFpEHzQjN",
          "aircraft": "777",
          "arrivalTime": "2016-07-27T21:42-07:00",
          "departureTime": "2016-07-27T20:30-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "0",
          "destinationTerminal": "0",
          "duration": 192,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES",
          "onTimePerformance": 67,
          "mileage": 1231,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 183,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 183,
        "flight": {
         "carrier": "AS",
         "number": "1494"
        },
        "id": "GsX6EEBQxsYFpfxV",
        "cabin": "COACH",
        "bookingCode": "Y",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lie7zeLgMcEYZTlY",
          "aircraft": "777",
          "arrivalTime": "2016-07-29T22:43-05:00",
          "departureTime": "2016-07-29T17:40-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "0",
          "destinationTerminal": "0",
          "duration": 183,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES",
          "onTimePerformance": 57,
          "mileage": 1231,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "carrier": "AS",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "YA2AA"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "YA2AA"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "segmentId": "Gz-ssctPDCAh0J7t"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "segmentId": "GsX6EEBQxsYFpfxV"
       }
      ],
      "baseFareTotal": "USD1905.13",
      "saleFareTotal": "USD1905.13",
      "saleTaxTotal": "USD171.07",
      "saleTotal": "USD2076.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD142.87"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW AS LAX Q27.91 910.70YA2AA AS DFW Q27.91 Q27.91 910.70YA2AA USD 1905.13 END ZP DFW LAX XT 142.87US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-07-27T21:29-04:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD2076.20",
    "id": "Jdha4xUQivPMBakcporFS000J",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 189,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 189,
        "flight": {
         "carrier": "AS",
         "number": "1311"
        },
        "id": "GaMru6W6ecbCWMKs",
        "cabin": "COACH",
        "bookingCode": "Y",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LjR0Pn0rOQWi3l6c",
          "aircraft": "777",
          "arrivalTime": "2016-07-27T09:39-07:00",
          "departureTime": "2016-07-27T08:30-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "0",
          "destinationTerminal": "0",
          "duration": 189,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES",
          "onTimePerformance": 88,
          "mileage": 1231,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 183,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 183,
        "flight": {
         "carrier": "AS",
         "number": "1457"
        },
        "id": "GKkXBcpUY-ZNVL5h",
        "cabin": "COACH",
        "bookingCode": "Y",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LSTXHX2SwMPwT000",
          "aircraft": "777",
          "arrivalTime": "2016-07-29T19:13-05:00",
          "departureTime": "2016-07-29T14:10-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "0",
          "destinationTerminal": "0",
          "duration": 183,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES",
          "onTimePerformance": 89,
          "mileage": 1231,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "carrier": "AS",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "YA2AA"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "YA2AA"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "segmentId": "GaMru6W6ecbCWMKs"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "segmentId": "GKkXBcpUY-ZNVL5h"
       }
      ],
      "baseFareTotal": "USD1905.13",
      "saleFareTotal": "USD1905.13",
      "saleTaxTotal": "USD171.07",
      "saleTotal": "USD2076.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD142.87"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW AS LAX Q27.91 910.70YA2AA AS DFW Q27.91 Q27.91 910.70YA2AA USD 1905.13 END ZP DFW LAX XT 142.87US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-07-27T09:29-04:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD2076.20",
    "id": "Jdha4xUQivPMBakcporFS000I",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 189,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 189,
        "flight": {
         "carrier": "AS",
         "number": "1311"
        },
        "id": "GaMru6W6ecbCWMKs",
        "cabin": "COACH",
        "bookingCode": "Y",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LjR0Pn0rOQWi3l6c",
          "aircraft": "777",
          "arrivalTime": "2016-07-27T09:39-07:00",
          "departureTime": "2016-07-27T08:30-05:00",
          "origin": "DFW",
          "destination": "LAX",
          "originTerminal": "0",
          "destinationTerminal": "0",
          "duration": 189,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES",
          "onTimePerformance": 88,
          "mileage": 1231,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 183,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 183,
        "flight": {
         "carrier": "AS",
         "number": "1494"
        },
        "id": "GsX6EEBQxsYFpfxV",
        "cabin": "COACH",
        "bookingCode": "Y",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lie7zeLgMcEYZTlY",
          "aircraft": "777",
          "arrivalTime": "2016-07-29T22:43-05:00",
          "departureTime": "2016-07-29T17:40-07:00",
          "origin": "LAX",
          "destination": "DFW",
          "originTerminal": "0",
          "destinationTerminal": "0",
          "duration": 183,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES",
          "onTimePerformance": 57,
          "mileage": 1231,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "carrier": "AS",
        "origin": "DFW",
        "destination": "LAX",
        "basisCode": "YA2AA"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "DFW",
        "basisCode": "YA2AA"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "segmentId": "GaMru6W6ecbCWMKs"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AEn12zLEh+m2Dw6NGbVZn1zYpSuV8727sslvEvOcXsm+1",
        "segmentId": "GsX6EEBQxsYFpfxV"
       }
      ],
      "baseFareTotal": "USD1905.13",
      "saleFareTotal": "USD1905.13",
      "saleTaxTotal": "USD171.07",
      "saleTotal": "USD2076.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD142.87"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD11.20"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD8.00"
       }
      ],
      "fareCalculation": "DFW AS LAX Q27.91 910.70YA2AA AS DFW Q27.91 Q27.91 910.70YA2AA USD 1905.13 END ZP DFW LAX XT 142.87US 8.00ZP 11.20AY 9.00XF DFW4.50 LAX4.50",
      "latestTicketingTime": "2016-07-27T09:29-04:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   }
  ]
 }
}
