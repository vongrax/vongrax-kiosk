// Core
import { app, App, ipcMain, screen } from 'electron';
import { injectable } from 'inversify';

// Interfaces
import { ElectronService } from '../../interfaces/electron-service.interface';

@injectable()
export class ElectronEventService implements ElectronService {
  private readonly _app: App;
  private readonly _ipcMain: Electron.IpcMain;
  private readonly _screen: Electron.Screen;

  constructor() {
    this._app = app;
    this._ipcMain = ipcMain;
    this._screen = screen;
  }

  public get app() {
    return this._app;
  }

  public get ipcMain() {
    return this._ipcMain;
  }

  public get screen() {
    return this._screen;
  }
}
