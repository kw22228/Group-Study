module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:import/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-plusplus': 'off',
        'spaced-comment': 'off',
        'lines-between-class-members': 'off',
        'linebreak-style': 'off',
        'no-underscore-dangle': 'off',
    },
};
