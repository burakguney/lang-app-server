const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    turkish: { type: String, required: true },
    english: { type: String, required: true },
    hint: { type: String, required: true }
})

const WordModel = mongoose.model('Word', WordSchema);

const getWords = () => WordModel.find();
const getWordById = (id) => WordModel.findById(id);
const createWord = (values) => new WordModel(values).save().then((word) => word.toObject());
const deleteWordById = (id) => WordModel.findOneAndDelete({ _id: id });
const updateWordById = (id, values) => WordModel.findByIdAndUpdate(id, values);

module.exports = { getWords, getWordById, createWord, deleteWordById, updateWordById };