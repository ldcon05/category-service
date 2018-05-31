import Category from '../../mongodb/models/category';

const resolvers = {
  RootQuery: {
    categories: () => Category.find().then(categories => categories),
  },
  rootMutation: {
    createCategory: (obj, args) =>
      Category.create(args).then(createdCategory => createdCategory),
  },
};

export default resolvers;
