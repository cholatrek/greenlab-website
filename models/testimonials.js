var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var TestimonialSchema = new Schema({

   
    testImage: {
        type: String,
       
    },
    
    testName:{

		type: String,
       
    },

    
    
    testimony:{

		type: String,
        
    },
    
   

    
    
     
  
})

// Create bootcamp slug from the name

module.exports = mongoose.model('testimonial', TestimonialSchema);