/**
 * Represents a OrderTransactionRequest
 * @class
 */
class OrderTransactionRequest {
    /**
     * Creates an instance of OrderTransactionRequest.
     * @param {number} subtotal - The subtotal of the package.
     * @param {number} shipping_charge - The shipping charge of the package.
     * @param {number} fee_insurance - The insurance fee of the package.
     * @param {boolean} is_insured - Indicates whether the package is insured.
     * @param {number} discount - The discount applied to the package.
     * @param {number} total_value - The total value of the package.
     * @param {number} total_cod - The total cash on delivery value of the package, required if is_cod true.
     * @param {number} weight - The total weight of the package / calculation items weight.
     * @param {number} width - The final width of the package.
     * @param {number} height - The final height of the package.
     * @param {number} length - The final length of the package.
     * @param {number} coolie - The final coolie attribute of the package. default 1 coolie
     * @param {string} package_category - The category of the package.
     * @param {string} package_content - The content of the package.
     */
    constructor(
    {
        subtotal,
        shipping_charge,
        fee_insurance,
        is_insuranced,
        discount,
        total_value,
        total_cod,
        weight,
        width,
        height,
        length,
        coolie,
        package_category,
        package_content
    }) {
        this.subtotal = subtotal;
        this.shipping_charge = shipping_charge;
        this.fee_insurance = fee_insurance;
        this.is_insuranced = is_insuranced;
        this.discount = discount;
        this.total_value = total_value;
        this.total_cod = total_cod;
        this.weight = weight;
        this.width = width;
        this.height = height;
        this.length = length;
        this.coolie = coolie;
        this.package_category = package_category;
        this.package_content = package_content;
    }
}

module.exports = OrderTransactionRequest;