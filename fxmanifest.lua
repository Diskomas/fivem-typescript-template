fx_version 'cerulean'
game 'gta5'

author "diskomas"
description "fivem typescript template by Mantas Tamasauskas (Diskomas)"
version "1.0"

-- dependency 'qb-core'

client_scripts {
	'build/client/client.js'
}

server_scripts {
	'build/server/server.js'
}

files {
    "build/html/*",
    "build/html/assets/*",
    "build/html/img/*",
    "build/html/index.html"
}

ui_page "build/html/index.html"