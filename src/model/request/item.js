/**
 * Represents an individual item in a shipment.
 */
class ItemRequest {
    /**
   * Creates an instance of an item.
   * @param {string} name - The name of the item.
   * @param {string} description - The description of the item.
   * @param {number} weight - The total weight of the item (qty x weight/item).
   * @param {string} weight_uom - Unit of measure for weight [kg, gram, gr].
   * @param {number} qty - Quantity of the item.
   * @param {number} value - Value of the item.
   * @param {number} width - Width of the item.
   * @param {number} height - Height of the item.
   * @param {number} length - Length of the item.
   * @param {boolean} is_wood_package - Indicates if the item uses wooden packaging [true/false].
   * @param {string} dimension_uom - Unit of measure for dimensions. [cm]
   * @param {number} total_value - value * qty
   */
    constructor({ name, description, weight, weight_uom, qty, value, width, height, length, is_wood_package, dimension_uom, total_value }) {
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.weight_uom = weight_uom;
        this.qty = qty;
        this.value = value;
        this.width = width;
        this.height = height;
        this.length = length;
        this.is_wood_package = is_wood_package;
        this.dimension_uom = dimension_uom;
        this.total_value = total_value;
    }
}

module.exports = ItemRequest;
