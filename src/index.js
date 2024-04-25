const axios = require('axios');
const AccessToken = require('./model/access-token');
const ShipmentRequest = require('./model/request/shipping.req');

/**
 * Class representing an OAuth client for client_credentials OAuth flow.
 */
class ShipdeoAuth {
    /**
     * Create an ShipdeoAuth instance.
     * @param {string} baseUrl - The base URL of the OAuth provider.
     * @param {string} clientId - The client ID given by the OAuth provider.
     * @param {string} clientSecret - The client secret given by the OAuth provider.
     */
    constructor(baseAuthUrl, clientId, clientSecret) {
        this.baseAuthUrl = baseAuthUrl;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    /**
     * Get an access token using the client credentials flow.
     * @return {Promise<Object>} The token object which includes the access token, token type, and expires in information.
     * @throws {Error} Throwing an error if the request fails.
     * @response AccessToken { 
     * accessToken : string, 
     * accessTokenExpiresAt: string
     * }
     */
    async getToken() {
        const url = `${this.baseAuthUrl}/oauth2/connect/token`;
        const params = new URLSearchParams();
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('grant_type', 'client_credentials');

        try {
            const response = await axios.post(url, params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const accessToken = new AccessToken(response.data.accessToken, response.data.accessTokenExpiresAt);
            return accessToken;
        } catch (error) {
            throw new Error(`Failed to retrieve token: ${error}`);
        }
    }
}

/**
 * Class representing an integration api SHIPDEO flow.
 */
class ShipdeoCore {
    constructor(baseUrl, accessToken) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
    }

    /**
     * 
     * @param {ShipmentRequest} shippingRequest body request can see on class ShimpentRequest
     * @returns 
     */
    async shipmentOngkir(shippingRequest) {
        try {
            const response = await axios.post(`${this.baseUrl}/v1/couriers/pricing`, shippingRequest, {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async orderCreate(orderCreateRequest) {

    }

    async orderUpdate(orderId, orderUpdateRequest) {

    }

    async orderCancel(orderId, reason) {
        
    }
}

module.exports = { ShipdeoAuth, ShipdeoCore };
