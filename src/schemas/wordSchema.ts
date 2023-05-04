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

const Word = mongoose.model('Word', WordSchema);

const getWords = () => Word.find().populate('category', 'name');
const getWordById = (id: string) => Word.findById(id).populate('category', 'name');
const getWordsByCategoryId = (id: string) => Word.find({ 'category': id });
const createWord = (word: Record<string, any>) => new Word(word).save().then((word) => word.toObject());
const deleteWordById = (id: string) => Word.findOneAndDelete({ _id: id });
const updateWordById = (id: string, values: Record<string, any>) => Word.findByIdAndUpdate(id, values);

export default { Word, getWords, getWordById, getWordsByCategoryId, createWord, deleteWordById, updateWordById };