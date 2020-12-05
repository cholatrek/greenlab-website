var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ContactSchema = new Schema({
   
   
    firstName:{

		type: String,
       
    },

    lastName:{

		type: String,
        
    },

    email:{

		type: String,       
        
    },
    
    
    message:{

		type: String,

        
    },
    
    relatedProblems:{

		type: String,
       
        
    },
    



    
    
     
  
});

module.exports = mongoose.model('contact', ContactSchema);