class AccessToken {
    /**
     * 
     * @param {*} accessToken token for access service shipdeo
     * @param {*} accessTokenExpiresAt  expire date for the token
     */
    constructor(accessToken, accessTokenExpiresAt) {
        this.accessToken = accessToken;
        this.accessTokenExpiresAt = accessTokenExpiresAt;
    }

}

module.exports = AccessToken;