setImmediate(() => {
  console.log("Hello client");
})

// Haven't tested but should work
let isToggled = false;
RegisterCommand("example", () => {
  if (isToggled){
    SetNuiFocus(false, false);
    SendNuiMessage(JSON.stringify({action: "nui-example", data: false}));
    isToggled = false;
  }else{
    SetNuiFocus(true, true);
    SendNuiMessage(JSON.stringify({action: "nui-example", data: true}));
    isToggled = true;
  }
  
}, false);