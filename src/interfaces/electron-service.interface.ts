import { App } from 'electron';

export interface ElectronService {
  app: App;
  ipcMain: Electron.IpcMain;
  screen: Electron.Screen;
}
