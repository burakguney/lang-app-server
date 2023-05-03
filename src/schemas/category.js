import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const Category = mongoose.model('Category', CategorySchema);

const getCategories = () => Category.find();
const getCategoryById = (id) => Category.findById(id);
const createCategory = (category) => new Category(category).save().then((category) => category.toObject());
const deleteCategoryById = (id) => Category.findOneAndDelete({ _id: id });
const updateCategoryById = (id, values) => Category.findByIdAndUpdate(id, values);

export default { Category, getCategories, getCategoryById, createCategory, deleteCategoryById, updateCategoryById }