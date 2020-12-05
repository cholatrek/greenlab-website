var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var EventSchema = new Schema({
   
   
      eventTitle:{

		  type: String,
       
        
    },
    eventDate: {

        type: Date,
        
    },
    eventExcerpt:{
      
		type: String,
      
        
    },

    // eventImages: [
    //     {
    //         type: String,
            
    //     } 
    // ], 

    eventImages :{
        type:Array
    },

    eventCategory: {
       type:String
      },

    //   help: [{
    //     type: String,
    
    //     default: 'user'
    //   }],
    
  


    
    
     
  
});



// Create  slug from the name
// EventSchema.pre('validate', function(next) {
//     if (this.title){
//         this.slug = slugify(this.title, { lower: true,strict:true });
   
//     }
//     next();
    
//   });

module.exports = mongoose.model('event', EventSchema);