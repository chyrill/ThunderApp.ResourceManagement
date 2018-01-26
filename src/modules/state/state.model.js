import mongoose, { Schema } from 'mongoose';

const StateSchema  = new Schema ({
    Name: {
        type: String
    }
});

export default mongoose.model('State', StateSchema);