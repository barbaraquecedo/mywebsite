/** definir el modelo de mongoose, luego importar en  modelo de controlador blog entries
 * CRUD listar, crear, obtener uno, editar, eliminar
 * handling de los errores
 * 
 */

const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const blogEntrySchema = new Schema({
    
    title: {
        type: String,
        required: 'A title is required'
    },

    status: {
        type: String,
        required: 'A feeling is required'
    },

    content: {
        type: String,
        required: 'Content is required'
    },

    banner: {
        type: String,
        required: 'A banner is required'
    },

    tags: {
        type: [String],
        default: []
    },

   owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }


}, {timestamps:true});

const BlogEntry = mongoose.model('BlogEntry', blogEntrySchema);
module.exports = BlogEntry;