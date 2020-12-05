var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var NewsSchema = new Schema({
   
    newsImage: {

        type: String,
    },

    newsTitle:{

		type: String,
        
    },

    newsDate: {

        type: Date,
        
    },

    newsContent:{
		type: String,  
    },
    


})

// Create bootcamp slug from the name


module.exports = mongoose.model('newsUpdate', NewsSchema);