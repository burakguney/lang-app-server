import mongoose from 'mongoose';

const WordSchema = new mongoose.Schema({
    turkish: { type: String, required: true },
    english: { type: String, required: true },
    hint: { type: String, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

const WordModel = mongoose.model('Word', WordSchema);

const getWords = () => WordModel.find().populate('category', 'name');
const getWordById = (id) => WordModel.findById(id).populate('category', 'name');
const getWordsByCategory = (category) => WordModel.find({ 'category': category });
const createWord = (word) => new WordModel(word).save().then((word) => word.toObject());
const deleteWordById = (id) => WordModel.findOneAndDelete({ _id: id });
const updateWordById = (id, values) => WordModel.findByIdAndUpdate(id, values);

export default { getWords, getWordById, getWordsByCategory, createWord, deleteWordById, updateWordById };