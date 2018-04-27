const { app, BrowserWindow, ipcMain } = require('electron') 

const url = require('url') 
const path = require('path')  

let mainWindow
let workerWindow

function createWindow() { 
   mainWindow = new BrowserWindow({width: 800, height: 600}) 
   mainWindow.loadURL("file://" + __dirname + "/index.html") 

   workerWindow = new BrowserWindow() 
   workerWindow.loadURL("file://" + __dirname + "/printer.html")
   //workerWindow.hide() 
}  

app.on('ready', ()=>{
	createWindow()
}) 

ipcMain.on('print', (event, arg) => {
	workerWindow.webContents.send("print-process", arg)
})

ipcMain.on('ready-to-print', (event, arg) => {
   workerWindow.webContents.print()
})