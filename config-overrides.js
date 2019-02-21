const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#532F7A',
            '@secondary-color': '#69498B',
            '@third-color': '#73639B',
            '@fourth-color': '#947DAC',
            '@fifth-color': '#A997BD',
            '@sixth-color': '#BFB1CD',
            '@seventh-color': '#D4CBDE',
            '@eith-color': '#EAE5EE',
            '@layout-header-background': 'transparent'
        },
    })
);