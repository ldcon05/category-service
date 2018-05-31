const rootMutation = `
  type rootMutation {
    createCategory(
      name: String!
      image: String
    ): Category
  }
`;

export default rootMutation;
