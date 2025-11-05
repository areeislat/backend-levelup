const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    images: [{
        type: String,
        required: true
    }],
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Compound index for tenant-specific queries
productSchema.index({ tenantId: 1, category: 1 });
productSchema.index({ tenantId: 1, name: 'text', description: 'text' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;