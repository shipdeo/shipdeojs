const ItemRequest = require("./item");
const OrderTransactionRequest = require("./order-transaction");

/**
 * Represents a OrderRequest.
 * @class
 */
class OrderRequest {
    /**
     * Creates an instance of OrderRequest.
     * @param {string} courier - The name of the courier.
     * @param {string} courier_service - The service of the courier.
     * @param {string} order_number - The order number.
     * @param {boolean} is_cod - Indicates whether the package is cash on delivery.
     * @param {string} delivery_type - The type of delivery.
     * @param {string} delivery_time - The delivery time. format WIB to WIB : 10/25/2021 08:13:09 AM +00:00 & Format UTC to WIB : 10/25/2021 01:13:09 AM +07:00 
     * @param {string} origin_lat - The latitude of the origin.
     * @param {string} origin_long - The longitude of the origin.
     * @param {string} origin_subdistrict_code - The subdistrict code of the origin.
     * @param {string} origin_subdistrict_name - The subdistrict name of the origin.
     * @param {string} origin_city_code - The city code of the origin.
     * @param {string} origin_city_name - The city name of the origin.
     * @param {string} origin_province_code - The province code of the origin.
     * @param {string} origin_province_name - The province name of the origin.
     * @param {string} origin_contact_name - The contact name of the origin.
     * @param {string} origin_contact_phone - The contact phone of the origin.
     * @param {string} origin_contact_address - The contact address of the origin.
     * @param {string} origin_contact_email - The contact email of the origin.
     * @param {string} origin_note - The note of the origin.
     * @param {string} origin_postal_code - The postal code of the origin.
     * @param {string} destination_lat - The latitude of the destination.
     * @param {string} destination_long - The longitude of the destination.
     * @param {string} destination_subdistrict_code - The subdistrict code of the destination.
     * @param {string} destination_subdistrict_name - The subdistrict name of the destination.
     * @param {string} destination_city_code - The city code of the destination.
     * @param {string} destination_city_name - The city name of the destination.
     * @param {string} destination_province_code - The province code of the destination.
     * @param {string} destination_province_name - The province name of the destination.
     * @param {string} destination_postal_code - The postal code of the destination.
     * @param {string} destination_contact_name - The contact name of the destination.
     * @param {string} destination_contact_phone - The contact phone of the destination.
     * @param {string} destination_contact_address - The contact address of the destination.
     * @param {string} destination_contact_email - The contact email of the destination.
     * @param {string} destination_note - The note of the destination.
     * @param {string} delivery_note - The delivery note.
     * @param {ItemRequest[]} items - The items in the package.
     * @param {OrderTransactionRequest} transaction - The transaction details.
     */
    constructor(
    {
        courier,
        courier_service,
        order_number,
        is_cod,
        delivery_type,
        delivery_time,
        is_send_company,
        origin_lat,
        origin_long,
        origin_province_code,
        origin_province_name,
        origin_city_code,
        origin_city_name,
        origin_subdistrict_code,
        origin_subdistrict_name,
        origin_contact_name,
        origin_contact_phone,
        origin_contact_address,
        origin_contact_email,
        origin_note,
        origin_postal_code,
        destination_lat,
        destination_long,
        destination_subdistrict_code,
        destination_subdistrict_name,
        destination_city_code,
        destination_city_name,
        destination_province_code,
        destination_province_name,
        destination_postal_code,
        destination_contact_name,
        destination_contact_phone,
        destination_contact_address,
        destination_contact_email,
        destination_note,
        delivery_note,
        items,
        transaction
    }) {
        this.courier = courier;
        this.courier_service = courier_service;
        this.order_number = order_number || null;
        this.is_cod = is_cod;
        this.delivery_type = delivery_type;
        this.delivery_time = delivery_time;
        this.is_send_company = is_send_company || false;
        this.origin_lat = origin_lat;
        this.origin_long = origin_long;
        this.origin_subdistrict_code = origin_subdistrict_code;
        this.origin_subdistrict_name = origin_subdistrict_name;
        this.origin_city_code = origin_city_code;
        this.origin_city_name = origin_city_name;
        this.origin_province_code = origin_province_code;
        this.origin_province_name = origin_province_name;
        this.origin_contact_name = origin_contact_name;
        this.origin_contact_phone = origin_contact_phone;
        this.origin_contact_address = origin_contact_address;
        this.origin_contact_email = origin_contact_email;
        this.origin_note = origin_note || null;
        this.origin_postal_code = origin_postal_code || null;
        this.destination_lat = destination_lat;
        this.destination_long = destination_long;
        this.destination_subdistrict_code = destination_subdistrict_code;
        this.destination_subdistrict_name = destination_subdistrict_name;
        this.destination_city_code = destination_city_code;
        this.destination_city_name = destination_city_name;
        this.destination_province_code = destination_province_code;
        this.destination_province_name = destination_province_name;
        this.destination_postal_code = destination_postal_code || null;
        this.destination_contact_name = destination_contact_name;
        this.destination_contact_phone = destination_contact_phone;
        this.destination_contact_address = destination_contact_address;
        this.destination_contact_email = destination_contact_email;
        this.destination_note = destination_note;
        this.delivery_note = delivery_note;
        this.items = items;
        this.transaction = transaction;
    }
}

module.exports = OrderRequest;
