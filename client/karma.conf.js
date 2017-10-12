// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    var configuration = {
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-junit-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        client:{
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            { pattern: './src/test.ts', watched: false }
        ],
        preprocessors: {
            './src/test.ts': ['@angular/cli']
        },
        mime: {
            'text/x-typescript': ['ts','tsx']
        },
        junitReporter: {
            outputDir: "test-results",
            outputFile: "unit-test-results.xml"
        },
        coverageIstanbulReporter: {
            reports: [ 'html', 'lcovonly', 'cobertura', 'text-summary' ],
            'report-config': {
                cobertura: {
                    file: 'cobertura.xml'
                }
            },
            fixWebpackSourcePaths: true
        },
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1280,1024',
                    '--remote-debugging-port=9222'
                ]
            }
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'junit', 'coverage-istanbul']
            : ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: (process.env.KARMA_RUNNER ? [process.env.KARMA_RUNNER] : ['Chrome']),
        singleRun: false
    };

    if (process.env.BUILD_NUMBER) {
        configuration.browsers = ['PhantomJS'];
    }

    config.set(configuration);
};
