const { ShipdeoCore } = require("../src");
const ShippingItemRequest = require("../src/model/request/shipping-item.req");
const ShipmentRequest = require("../src/model/request/shipping.req");

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