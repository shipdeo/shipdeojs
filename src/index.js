const axios = require('axios');

/**
 * Class representing an OAuth client for client_credentials OAuth flow.
 */
class ShipdeoAuth {
  /**
   * Create an OAuthClient instance.
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
      return response.data;
    } catch (error) {
      throw new Error(`Failed to retrieve token: ${error}`);
    }
  }
}

module.exports = ShipdeoAuth;
