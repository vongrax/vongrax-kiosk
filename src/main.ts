// Core
import 'reflect-metadata';

// IOC Container
import { iocContainer } from './config/investify.config';

// Interfaces
import { ElectronService } from './interfaces/electron-service.interface';
import { WindowConfig } from './interfaces/window-config.interface';

// Constants
import { TYPES } from './constants/inject.constants';

// Modules
import { Wrapper } from './modules/wrapper/wrapper';

const electronService = iocContainer.get<ElectronService>(TYPES.ElectronEventService);
const config = iocContainer.get<WindowConfig>(TYPES.Config);

const devtools = false;

const app = new Wrapper(electronService, config, devtools);

app.bootstrap();
