
/**
 * Represents a OrderConfirmRequest.
 * @class
 */
class OrderConfirmRequest {
    /**
     * Creates an instance of OrderConfirmRequest.
     * @param {string} delivery_type - The type of delivery.
     * @param {string} delivery_time - The delivery time. format WIB to WIB : 10/25/2021 08:13:09 AM +00:00 & Format UTC to WIB : 10/25/2021 01:13:09 AM +07:00 
     */
    constructor(
    {
        delivery_type,
        delivery_time,
    }) {
        this.delivery_type = delivery_type;
        this.delivery_time = delivery_time;
    }
}

module.exports = OrderConfirmRequest;
