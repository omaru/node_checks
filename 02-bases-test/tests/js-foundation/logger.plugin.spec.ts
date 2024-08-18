
import { buildLogger,logger as winstonLogger } from '../../src/plugins/logger.plugin'; 

describe('plugins/logger.plugin.ts', () => {

  it('buildLogger should return an object', () => {
    const logger = buildLogger('test');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');

  });
  it('should log a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
    const message = 'test message';
    const service = 'test';

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith('info',expect.objectContaining({level:'info', service, message }));
  });

});