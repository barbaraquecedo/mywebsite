const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;


const cvSchema = new Schema({

    name: {
        type: String,
        required: 'A name is required'
    },

    surname: {
        type: String,
        required: 'A surname is required'
    },

    description: {
        type: String,
        required: 'A description is required',
        maxlength: [1200, 'Your text is too long']
    },

    phone: {
        type: Number,
        required: 'A phone number is required'
    },

    email: {
        type: String,
        required: 'An email is required',
        trim: true,
        lowercase: true,
    },

    experience: {
        type: String,
        
    },

    education: {
        type: String,
    },

    skills: {
        type: String,
    }

}, {timestamps: true}); 

const Cv = mongoose.model('CV', cvSchema);
module.exports = CV;