import mongoose, { Schema } from 'mongoose';

const CountrySchema = new Schema ({
    Name: {
        type: String    
    }
});

export default mongoose.model('Country', CountrySchema);