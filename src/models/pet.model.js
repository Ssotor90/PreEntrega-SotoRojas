import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: String,
    type: String,
    ownerId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model('Pet', petSchema);
