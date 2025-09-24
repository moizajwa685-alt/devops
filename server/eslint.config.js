export default [
  {
    files: ['**/*.js'], //only check .js files in directory
    rules: {
      semi: 'error',
      'no-unused-vars': 'warn', //warn if var are unused
    },
  },
];
