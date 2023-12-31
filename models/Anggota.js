const mongoose = require('mongoose')
const anggotaSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    },
    foto: {
        type: String, 
        require: true
    }, 
    email: {
        type: String, 
        require: true
    },
    nama: {
        type: String, 
        require: true
    }, 
    npm: {
        type: String, 
        require: true
    }, 
    prodi: {
        type: String, 
        require: true
    }, 
    sabuk: {
        type: String, 
        require: true
    }, 
    tempat_lahir: {
        type: String, 
        require: true
    }, 
    tanggal_lahir: {
        type: String, 
        require: true
    }, 
    tinggi_badan: {
        type: String, 
        require: true
    },
    berat_badan: {
        type: String, 
        require: true
    }, 
    nomor_whatsapp: {
        type: String, 
        require: true
    }
}, 

{
    versionKey: false
})

module.exports = mongoose.model('Anggota', anggotaSchema, 'anggota')