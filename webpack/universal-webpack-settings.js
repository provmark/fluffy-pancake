module.exports ={
 getServerData: function(theme) {
    switch (theme) {
        case 'dark': {
            return {
                "server":
                {
                    "input": "./src/server.js",
                    "output": "./build/dark/server.js"
                }
            }
            break;
        }
        case 'light':
        default: {
            return {
                "server":
                {
                    "input": "./src/server.js",
                    "output": "./build/light/server.js"
                }
            }
        }
    }
}
}