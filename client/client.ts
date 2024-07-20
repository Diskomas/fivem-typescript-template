on("onResourceStart", (location: string) => {
    const resourceName = GetCurrentResourceName()
    
    if(resourceName != location) return
    
    console.log(`[${resourceName}] initiated`)

    SendNuiMessage(JSON.stringify({
        type: 'init', 
        name: resourceName,
    }))
})

// your client code here