# Filter JSON record
1. Run "npm install" to install all the required dependencies
2. Run "npm start" to start the server. It should return a message "Server running on port  3001" and if not ensure your port number 3001 is available.
3. Test API using web browser or any application which handles HTTP API (Example: Postman). 
    
    URL: http://localhost:3001/records/:pageNumber
    
    Params: pageNumber (Please provide an Positive Integer Page Number greater than 0.)
    
    Method: GET
    
    Response: 
        {
            "Ids": "An array containing the ids of all items returned from the request",
            "Open": [
                {
                    "id": 12,
                    "color": "yellow",
                    "disposition": "open"
                },
                {
                    "id": 13,
                    "color": "green",
                    "disposition": "open"
                },
                {
                    "id": 14,
                    "color": "yellow",
                    "disposition": "open"
                },
                {
                    "id": 18,
                    "color": "green",
                    "disposition": "open"
                },
                {
                    "id": 19,
                    "color": "yellow",
                    "disposition": "open"
                }
            ],
            "ClosedCount": 4,
            "PreviousPage": 1,
            "NextPage": 3
        }
