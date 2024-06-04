import { app, BrowserWindow } from 'electron';

// Cual la app este lista (evento 'ready') crear la ventana
app.on('ready', createMyWindow);

let mainWindow;

function createMyWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    // webPreferences: {
    //   preload: {} // Pre-cargar archivos
    // }
  });

  mainWindow.loadFile('index.html');
}