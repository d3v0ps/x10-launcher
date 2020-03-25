const {app, BrowserWindow, shell, ipcMain } = require('electron'); //importamos lo necesario para trabajar ocn electron
const path = require('path');
const url = require('url');
const wifi = require('node-wifi');
const batteryLevel = require('battery-level');
const shutdown = require('electron-shutdown-command');

wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});

let win; // esta variable tendrá el contenido de nuestra ventana de aplicación

function createWindow () { //aqui procedemos a crear la ventana
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  }) //definimos un alto y ancho en el que se inicializará nuestra aplicación

  // le pasamos como ruta el archivo index que se genera luego de ocmpilar nuestra aplicación de Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/x10-launcher/index.html'), //esta es la ruta de nuestro index luego de compilar en Angular
    protocol: 'file:',
    slashes: true
  }));

  win.removeMenu();
  win.maximize();
  win.setFullScreen(true);

  win.webContents.openDevTools();

//esto se dispara cuando cerremos la ventana, igualamos win en null para liberar memoria
  win.on('closed', () => {
    win = null
  })
}

//cuando la aplicación este lista llamamos al metodo que definimos arriba para crear la ventana
app.on('ready', createWindow)


app.on('window-all-closed', () => {
  // process.platform contiene el nombre del sistema operativo (darwin == mac, win32 == windows)
  if (process.platform !== 'darwin') { // con esto le decimos que tenga un proceso natural para una aplicación nativa al momento de cerrar la ventana
    app.quit()
  }
})

//aqui nos aseguramos de que cuando la ventana se active no sea nula, para esto llamamos al metodo que se encarga de crear la ventana
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('system signal', (event, signal) => {
  switch (signal) {
    case 'close':
      app.quit();
      break;
    case 'restart':
      shutdown.reboot({
        force: true,
        timerseconds: 60,
        quitapp: true
      })
      break;
    case 'shutdown':
      shutdown.shutdown({
        force: true,
        timerseconds: 60,
        quitapp: true
      })
      break;
  }
})

ipcMain.on('open app', (event, appToOpen) => {

    switch (appToOpen.name) {
      default:
        shell.openItem(appToOpen.url);
    }

});

ipcMain.on('get system metadata', async (event, arg) => {

  const wifiConnections = await wifi.getCurrentConnections();
  const battery = await batteryLevel();

  event.reply('system metadata', {
    wifiConnections,
    battery
  })
});
