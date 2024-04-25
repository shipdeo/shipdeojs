const ShippingItemRequest = require("./shipping-item.req");

class ShipmentRequest {

    /**
    * Constructs a shipment instance from provided data.
    * @param {string[]} couriers - Array of courier names involved in the shipment.
    * @param {boolean} is_cod - Indicates whether the shipment is cash-on-delivery.
    * @param {string} origin_lat - Latitude of the shipment origin.
    * @param {string} origin_long - Longitude of the shipment origin.
    * @param {string} origin_city_code - City code of the shipment origin.
    * @param {string} origin_city_name - City name of the shipment origin.
    * @param {string} origin_subdistrict_code - Subdistrict code of the origin.
    * @param {string} origin_subdistrict_name - Subdistrict name of the origin.
    * @param {string} destination_lat - Latitude of the shipment destination.
    * @param {string} destination_long - Longitude of the shipment destination.
    * @param {string} destination_city_code - City code of the destination.
    * @param {string} destination_city_name - City name of the destination.
    * @param {string} destination_subdistrict_code - Subdistrict code of the destination.
    * @param {string} destination_subdistrict_name - Subdistrict name of the destination.
    * @param {string} destination_postal_code - Postal code of the destination.
    * @param {ShippingItemRequest[]} items - Array of items included in the shipment.
    */
    constructor({ couriers, is_cod, origin_lat, origin_long, origin_city_code, origin_city_name, origin_subdistrict_code, origin_subdistrict_name, destination_lat, destination_long, destination_city_code, destination_city_name, destination_subdistrict_code, destination_subdistrict_name, destination_postal_code, items }) {
        this.couriers = couriers;
        this.is_cod = is_cod;
        this.origin_lat = origin_lat;
        this.origin_long = origin_long;
        this.origin_city_code = origin_city_code;
        this.origin_city_name = origin_city_name;
        this.origin_subdistrict_code = origin_subdistrict_code;
        this.origin_subdistrict_name = origin_subdistrict_name;

        this.destination_lat = destination_lat;
        this.destination_long = destination_long;
        this.destination_city_code = destination_city_code;
        this.destination_city_name = destination_city_name;
        this.destination_subdistrict_code = destination_subdistrict_code;
        this.destination_subdistrict_name = destination_subdistrict_name;
        this.destination_postal_code = destination_postal_code;
        this.items = items.map(item => new ShippingItemRequest(item));
    }
}

module.exports = ShipmentRequest;
