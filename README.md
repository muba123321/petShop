﻿# petShop 

# Pet Shop Application
## Overview
The Pet Shop application is a simple e-commerce application that allows users to browse and purchase pets from a virtual pet store. The application uses a Javascript architecture, with each service responsible for a specific business capability.
## Architecture
The Pet Shop application is built using a modern project architecture, with import&export modules communicating with each other
using APIs. The services are deployed to communicate with the desired cats and dogs api with each service running in its apiKey.
## Technologies Used
* JavaScript
* Html
* CSS
## API Documentation
### Pet Service
* **GET /CATIDs**: Retrieves a list of all cat's names and IDs
* **GET /DOGSIDs**: Retrieves a list of dogs name and IDs
### Buying Service
* **GET /Pet**: Retrieves a list of all pets either cats or dogs based on the user button selection
* **POST /Pet**: Enables user to purchase a per
* **DELETE /Pet/{id}**: Enables user to delete the pre-purchased pet


