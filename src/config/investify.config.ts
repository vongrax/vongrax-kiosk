// Core
import { Container } from 'inversify';

// Constants
import { TYPES } from '../constants/inject.constants';

// Modules
import { ElectronEventService } from '../modules/electron-event-service/electron-event-service';
import { windowConfig } from './window.config';

// Interfaces
import { ElectronService } from '../interfaces/electron-service.interface';
import { WindowConfig } from '../interfaces/window-config.interface';

const iocContainer = new Container();
iocContainer.bind<ElectronService>(TYPES.ElectronEventService).to(ElectronEventService);
iocContainer.bind<WindowConfig>(TYPES.Config).toConstantValue(windowConfig);

export { iocContainer };
