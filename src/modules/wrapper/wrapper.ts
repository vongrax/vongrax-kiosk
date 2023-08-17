// Core
import { BrowserWindow, screen } from 'electron';
import urlValue from 'url';
import { resolve } from 'path';

// Interfaces
import { ElectronService } from '../../interfaces/electron-service.interface';
import { WindowConfig } from '../../interfaces/window-config.interface';

export class Wrapper {
  public mainWindow: null | BrowserWindow;
  protected frontUrl: string;
  constructor(
    private readonly electronService: ElectronService,
    private readonly config: WindowConfig,
    private readonly devtools?: boolean
  ) {
    this.defineFrontUrl();
  }

  private defineFrontUrl() {
    this.frontUrl = urlValue.format({
      pathname: resolve(__dirname, '../dist/index.html'),
      protocol: 'file:',
      slashes: true,
    });
  }

  private async loadingFrontend() {
    await this.mainWindow.loadURL(this.frontUrl);
  }
  private async createWindow() {
    const { width, height } = screen.getPrimaryDisplay().size;

    this.mainWindow = new BrowserWindow({
      ...this.config,
      width: this.config.width || width,
      height: this.config.height || height,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    await this.loadingFrontend();

    if (this.devtools) {
      this.mainWindow.webContents.openDevTools(); // команда открывает devtools
    }
  }

  public bootstrap() {
    this.electronService.app.on('ready', async () => {
      await this.createWindow();
    });
  }
}
