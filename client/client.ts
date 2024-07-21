import utils from '../utils/utils'

on("onResourceStart", async (location: string) => {
    const resourceName = GetCurrentResourceName()
    if(resourceName != location) return console.error( `Resource name does not match location: ${resourceName} != ${location}`)

    await utils.sleep(100) // wait for nui to load

    SendNuiMessage(JSON.stringify({
        type: 'init', 
        name: resourceName,
    }))
})

// your client code here