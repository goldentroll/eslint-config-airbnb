const importResolver = {
  // https://github.com/benmosher/eslint-plugin-import/issues/1396
  [require.resolve('eslint-import-resolver-node')]: {},
};

try {
  const vueCliConfig = require.resolve('@vue/cli-service/webpack.config.js')
  importResolver[require.resolve('eslint-import-resolver-webpack')] = {
    config: vueCliConfig,
  };
} catch (e) {
  // ignore
}

module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
  ],
  settings: {
    'import/resolver': importResolver,
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs', // ?
      '.ts',
      '.tsx',
    ],
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
  },
};
