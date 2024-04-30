const { ShipdeoCore } = require("../src");
const OrderConfirmRequest = require("../src/model/request/order-confirm");

const orderConfirm = async () => {
    try {
        const accessToken = "e50fc84aa219a03f066a5c812cb1bccc04d66690";
        const baseUrl = "https://main-api-development.shipdeo.com"

        const shipdeoCore = new ShipdeoCore(baseUrl, accessToken);
       
        const orderConfirmRequest = new OrderConfirmRequest({
            "delivery_type": "pickup",
            "delivery_time": "4/30/2024 08:31:17 PM +0000",
        })
        
        // Service Request Pickup/Dropoff
        const order = await shipdeoCore.orderConfirm(
            '66306a54da4c4fce1b91c22e', 
            orderConfirmRequest
        );

        console.log('Orders:', order);
    } catch (err) {
        console.error('Error:', err.response.data.message)
    }
}

// Running Service
orderConfirm();