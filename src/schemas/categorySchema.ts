import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

const Category = mongoose.model('Category', CategorySchema);

const getCategories = () => Category.find();
const getCategoryById = (id: string) => Category.findById(id);
const createCategory = (category: Record<string, any>) => new Category(category).save().then((category) => category.toObject());
const deleteCategoryById = (id: string) => Category.findOneAndDelete({ _id: id });
const updateCategoryById = (id: string, values: Record<string, any>) => Category.findByIdAndUpdate(id, values);

export default { Category, getCategories, getCategoryById, createCategory, deleteCategoryById, updateCategoryById }