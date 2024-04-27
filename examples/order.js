const { ShipdeoCore } = require("../src");
const ItemRequest = require("../src/model/request/item");
const OrderRequest = require("../src/model/request/order");
const OrderTransactionRequest = require("../src/model/request/order-transaction");

const order = async () => {
    try {
        const accessToken = "2949e5d484ef798e974e0884ccd261c9b88f4af5";
        const baseUrl = "https://main-api-development.shipdeo.com"

        const shipdeoCore = new ShipdeoCore(baseUrl, accessToken);
        const item = new ItemRequest({
            "value": 20000,
            "total_value": 20000, 
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
        const orderTransaction = new OrderTransactionRequest(
            {
                "width": 30,
                "height": 10,
                "length": 10,
                "weight": 1,
                "package_category": "NORMAL",
                "package_content": "Baju Kerja",
                "coolie": 1,
                "subtotal": 20000,
                "shipping_charge": 8000,
                "fee_insurance": 0,
                "is_insuranced": false,
                "total_value": 28000,
                "total_cod": 28000,
                "discount": 0
            }
        )

        const orderRequest = new OrderRequest({
            "courier": "sicepat",
            "charge": 8000,
            "courier_service": "SIUNT",
            "is_cod": true,
            "delivery_type": "pickup",
            "delivery_time": "4/27/2024 08:31:17 PM +0000",
            "origin_subdistrict_code": "31.71.01",
            "origin_subdistrict_name": "GAMBIR",
            "origin_city_code": "31.71",
            "origin_city_name": "KOTA ADM. JAKARTA PUSAT",
            "origin_province_code": "31",
            "origin_province_name": "DKI JAKARTA",
            "origin_lat": -6.1737996,
            "origin_long": 106.8266873,
            "origin_contact_name" : "Devi",
            "origin_contact_phone" : "08200000000",
            "origin_contact_address" : "Jln Gambir",
            "origin_contact_email" : "devi@dev.com",
            "destination_subdistrict_code": "31.73.07",
            "destination_subdistrict_name": "PAL MERAH",
            "destination_city_code": "31.73",
            "destination_city_name": "KOTA ADM. JAKARTA BARAT",
            "destination_province_code": "31",
            "destination_province_name": "DKI JAKARTA",
            "destination_lat": null,
            "destination_long": null,
            "destination_contact_name" : "Devi2",
            "destination_contact_phone" : "08210000000",
            "destination_contact_address" : "Jln Palmerah",
            "destination_contact_email" : "devi2@dev.com",
            "destination_note": "Deket Apotek 24",
            "delivery_note" : "jangan di banting ya",
            "items": [
                item
            ],
            "transaction": orderTransaction
        })

        
        console.log(JSON.stringify(orderRequest, null, 2))
        const order = await shipdeoCore.orderCreate(orderRequest);
        console.log('Orders:', order);
    } catch (err) {
        console.error('Error:', err.response.data.message)
    }
}

// Running Service
order();