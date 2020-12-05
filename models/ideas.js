var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IdeasSchema = new Schema({
   
   
    firstName:{

		type: String,

    },
    lastName:{

		type: String,

    },
    email:{

		type: String,
       
        
    },
    relatedCategory:{
        
        type: String,
                
    },
    
    
    message:{
        
		type: String,
        
        
    },
   
    

    
    
     
  
});

module.exports = mongoose.model('idea', IdeasSchema);