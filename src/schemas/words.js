const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    turkish: { type: String, required: true },
    english: { type: String, required: true },
    hint: { type: String, required: true }
})

export const WordModel = mongoose.model('Word', WordSchema);

export const getWords = () => WordModel.find();
export const getWordById = (id) => WordModel.findById(id);
export const createWord = (values) => new WordModel(values).save().then((word) => word.toObject());
export const deleteWordById = (id) => WordModel.findOneAndDelete({ _id: id });
export const updateWordById = (id, values) => WordModel.findByIdAndUpdate(id, values);