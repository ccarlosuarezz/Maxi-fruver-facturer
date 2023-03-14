const {app, BrowserWindow, ipcMain } = require('electron');
const indexPath = './dist/index.html';
let main_window;

function createWindow() {
    main_window = new BrowserWindow({
        width: 900,
        height: 650,
        
        webPreferences: {
            nodeIntegration: true
        }
    });
    main_window.loadFile(indexPath);

    main_window.on('closed', function () {
        mainWindow = null;
        app.quit(); 
        app.exit(0);
    });
}

app.whenReady().then(createWindow);

ipcMain.handle('close-main-window', async (evt) => {
    main_window.close();
});