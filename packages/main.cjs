const { app, BrowserWindow } = require('electron')
const path = require('path')

const dev = process.env.IS_DEV === 'true'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: true,
    },
  })

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    dev
      ? 'http://localhost:8080'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  )
  // Open the DevTools.
  if (dev) {
    mainWindow.webContents.openDevTools()
  }
}


// if (dev) {
//   console.log('Development mode')
//   app.whenReady()
//     .then(() => import('electron-devtools-installer'))
//     .then(async({default: installExtension}) => {
//       installExtension('ljjemllljcmogpfapbkkighbhhppjdbg')
//         .then((name) => console.log(`Added Extension: ${name}`))
//         .catch((err) => console.log('An error occurred: ', err))
//     })
//     .catch((e) => console.error('Failed install extension:', e))
// }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})