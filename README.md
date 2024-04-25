# Shipdeo
Integrasion Shipping Indonesia with shipdeo, 

## Official Website

* [Shipdeo](http://www.shipdeo.com/) - Website Shipdeo
* [Portal Shipdeo](https://portal.shipdeo.com/) - access for User Shipdeo
* [Contact Us](https://api.whatsapp.com/send/?phone=6287897759000&text&type=phone_number&app_absent=0) - our Customer Service

### Courier List
Courier list is a service that displays a list of available couriers along with the courier code. The courier code will later be used when accessing the Tracking, Pricing and Order API. The following is the courier code on shipdeo:

#### Reguler & Cargo Courier

| code      | courier name   |
| --------- | -------------- |
| sicepat   | Sicepat Ekspres|
| jne       | JNE Express    |
| ninja     | Ninja Express  |
| sap       | SAP Express    |
| jnt       | J&T Express    |
| anteraja  | Anteraja       |
| sc        | Sentral Cargo  |
| idx       | ID Express     |

#### Instant Courier

| code      | courier name   |
| --------- | -------------- |
| gosend    | GoSend         |
| grab      | Grab Express   |


## Getting Started
For install our library
```bash
npm i shipdeo
```

### Prerequisites

For API integration, we divide it into 3 stages as follows:

1. Setup auth and master data
2. Order API integration
3. Webhook integration

After carrying out all the steps above, integration testing or UAT can be carried out with the Shipdeo team to ensure that the data sent to Shipdeo is appropriate. To minimize problems in the future, it is recommended to release to production after carrying out UAT with the Shipdeo team.

### Get Credential Shipdeo
The following is how to get the `clientId` and `clientSecret` on the shipdeo portal.
1.  Login and access the shipdeo apps page
2. Fill in the integration form
    - Enter the name of your webstore
    - In he platform option select `Integration`
    - In the courier column, select the courier you want to activate
    - Select `order` to use all shipdeo features on the webstore
3. Click save and contact the shipdeo support team to activate the integration
4. If the account is active, you can get the `clientId` and `clientSecret` on the integration details page as below

Based on the  `clientId` and `clientSecret` that you have, you can request an `accessToken`. `accessToken` is a Bearer Token which will later be used as a credential to access Shipdeo Main API and accessToken will `expire in 24 hours`.

### Auth
Service for generate `accessToken`, example
```javascript
const { ShipdeoAuth } = require("shipdeo");

const clientId = 'yourClientID';
const clientSecret = 'yourClientSecret';
const baseAuthUrl = 'https://auth-api-development.shipdeo.com';

const client = new ShipdeoAuth(baseAuthUrl, clientId, clientSecret);

client.getToken()
  .then(token => console.log('Token:', token))
  .catch(err => console.error('Error:', err));

```

#### Auth implementation recommendations
![You need to store the token on your local system for 1 day.](assets/image.png)

### Ongkir
Service for get ongkir , example: 
```Javascript
const { ShipdeoCore } = require("shipdeo");
const ShippingItemRequest = require("shipdeo/model/request/shipping-item.req");
const ShipmentRequest = require("shipdeo/model/request/shipping.req");

const accessToken = "80d7c9dd62be00ae392c8b13989eecbf00862ce5";
const baseUrl = "https://main-api-development.shipdeo.com"

const shipdeoCore = new ShipdeoCore(baseUrl, accessToken);

const item = new ShippingItemRequest({
    "value": 100000,
    "height": 11,
    "width": 11,
    "length": 11,
    "weight": 1,
    "qty": 1,
    "weight_uom": "kg",
    "dimension_uom": "cm",
    "name": "Baju Kerja",
    "description": "ini baju kerja",
    "is_wood_package": false
})
const shippingRequest = new ShipmentRequest({
    "couriers": [
        "ninja", "sicepat"
    ],
    "is_cod": false,
    "origin_subdistrict_code": "31.71.01",
    "origin_subdistrict_name": "GAMBIR",
    "origin_city_code": "31.71",
    "origin_city_name": "KOTA ADM. JAKARTA PUSAT",
    "origin_lat": -6.1737996,
    "origin_long": 106.8266873,
    "destination_subdistrict_code": "31.73.07",
    "destination_subdistrict_name": "PAL MERAH",
    "destination_city_code": "31.73",
    "destination_city_name": "KOTA ADM. JAKARTA BARAT",
    "destination_lat": null,
    "destination_long": null,
    "destination_note": "",
    "items" : [
        item
    ]
})

shipdeoCore.shipmentOngkir(shippingRequest)
  .then(data => console.log('Ongkir:', data))
  .catch(err => console.error('Error:', err));

```