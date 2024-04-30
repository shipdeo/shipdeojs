const { ShipdeoCore } = require("../src");
const ItemRequest = require("../src/model/request/item");
const ShippingRequest = require("../src/model/request/shipping");

const accessToken = "e50fc84aa219a03f066a5c812cb1bccc04d66690";
const baseUrl = "https://main-api-development.shipdeo.com"

const shipdeoCore = new ShipdeoCore(baseUrl, accessToken);

const item = new ItemRequest({
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
const shippingRequest = new ShippingRequest({
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