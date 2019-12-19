const { WebpackPlugin } = require('@electron-forge/plugin-webpack')

module.exports = {
    electronPackagerConfig: {
        icon: __dirname + "/icon/icon.ico",
        name: "OpenPort"
    },
    packagerConfig: {
        icon: __dirname + "/icon/icon.ico",
        name: "OpenPort",
        "win32metadata": {
            "requested-execution-level": "requireAdministrator"
        }
    },
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "OpenPort",
                owners: "mohammad h alijany",
                title: "OpenPort",
                noMsi: false,
                setupIcon: __dirname + "/icon/icon.ico"
            }
        }
    ],
    plugins: [
        ["@electron-forge/plugin-webpack", {
            mainConfig: "./webpack.main.config.js",
            renderer: {
                config: "./webpack.renderer.config.js",
                entryPoints: [
                    {
                        html: "./src/index.html",
                        js: "./src/renderer.js",
                        name: "main_window"
                    }
                ]
            }
        }]
    ]
}