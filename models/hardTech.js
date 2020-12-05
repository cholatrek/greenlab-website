var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var NewsSchema = new Schema({
   
    techImage: {

        type: String,
    },

    techTitle:{

		type: String,
        
    },


    techLink:{

		type: String,
        
    },

    techDate: {

        type: Date,
        
    },

    techPublisher:{
		type: String,  
    },
    


})

// Create bootcamp slug from the name


module.exports = mongoose.model('hardTech', NewsSchema);