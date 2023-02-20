const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    apodo:{
        type: String,
        required: true
    },
    fundacion:{
        type: String,
        required: true
    },
    socios:{
        type: String,
        required: true
    },
    presidente:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    estadio:{
        type: String,
        required: true
    },
    escudo:{
        type: String,
        required: true
    },
    titulos:{
        type: Number,
        required: true
    },
    equipacion:{
        type: String,
        required: true
    },
    imgEstadio:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('User', userSchema);