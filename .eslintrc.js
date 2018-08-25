module.exports = {
    extends: ['airbnb'],
    plugins: ['prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    rules: {
        'prettier/prettier': 'error',
        indent: ['error', 4],
        'no-use-before-define': 0,

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': false,
    },
};
