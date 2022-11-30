module.exports = {
  // 전역 변수 사용을 정의
  // 추가하지 않으면 ESLint 규칙에 걸림
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    // browser: true,
    // es6: true,
    // node: true,
  },

  parser: '@typescript-eslint/parser', // ESLint 파서 지정
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX를 파싱
    },
    ecmaVersion: 12, // Modern ECMAScript를 파싱
    sourceType: 'module', // import, export를 사용
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', 'import'],
  rules: {
    // ESLint 규칙을 지정 extends에서 지정된 규칙을 덮어 쓸 수 있음
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'error',
    'prefer-arrow-callback': 'off',
    'no-var': 'error',
    'no-dupe-keys': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    // printWidth: ['error', ],
  },
  settings: {
    react: {
      version: 'detect', // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지
    },
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // 해당 플러그인의 권장 규칙을 사용
    'plugin:prettier/recommended', // plugin과 eslint-config-prettier 한번에 설정
  ],
};
