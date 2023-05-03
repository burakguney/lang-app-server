import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const CategoryModel = mongoose.model('Category', CategorySchema);

const getCategories = () => CategoryModel.find();
const getCategoryById = (id) => CategoryModel.findById(id);
const createCategory = (category) => new CategoryModel(category).save().then((category) => category.toObject());
const deleteCategoryById = (id) => CategoryModel.findOneAndDelete({ _id: id });
const updateCategoryById = (id, values) => CategoryModel.findByIdAndUpdate(id, values);

export default { getCategories, getCategoryById, createCategory, deleteCategoryById, updateCategoryById }