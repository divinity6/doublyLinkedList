/** ===== jest.config.js ===== */

/**
 * 각 config 에 대한 자세한 설명은 아래 docs 에서 설명합니다
 * @see { https://jestjs.io/docs/configuration }
 */

module.exports = {
    // 자동으로 모든 테스트 전에 mock 호출, 인스턴스 , context 및 테스트 결과를 지웁니다
    clearMocks: true,

    // 테스트 커버리지 보고 : 현재 파일에서 JEST가 커버하고 있는 파일 라인을 봅니다. 단 이거 키면 느려질 수  있음
    collectCoverage: false,

    // jest 가 coverage 파일을 내보내는 디렉터리 위치입니다
    coverageDirectory: 'coverage',

    // 테스트 커버리지를 제공할시, 어떻게 공급할지를 나타냅니다 ( default : babel ) or v8
    coverageProvider: 'v8',

    // global 설정을 처리하는 모듈 test 실행 시 최초 한번 실행되며 반드시 module.export = async () => {} 형태이어야 함
    // globalSetup : "./jest.setup.js",
    // 모듈이 사용할 수 있는 파일 확장자 배열 : 모듈을 사용할 시 왼쪽에서 오른쪽으로 해당 모듈의 이름 + 확장자로 모듈을 찾음
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],

    // 리소스나 모듈 위치 path alias 와 매핑할 수 있도록 지정
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
    },

    // 테스트에 사용할 환경 정보
    testEnvironment: 'jest-environment-node',

    // jest 가 테스트파일을 탐지하는데 사용하는 전역 패턴들입니다
    testMatch: [
        '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
        '<rootDir>/**/*.spec.(js|jsx|ts|tsx)',
        '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    ],

    // 해당 정규표현식 패턴과 일치하는 파일은 변환을 무시합니다
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};