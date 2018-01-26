import mongoose, { Schema } from 'mongoose';


const CitySchema = new Schema ({
    Name: {
        type: String
    }
});

export default mongoose.model('City', CitySchema);