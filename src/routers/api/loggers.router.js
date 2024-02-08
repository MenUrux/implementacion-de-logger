import { Router } from 'express';
import { addLogger } from '../../utils/logger.js';

const router = Router();


/* const loggerMessage = `${req.method} - route: ${req.url} - ${new Date().toLocaleTimeString()}` */

router.get('/', addLogger, (req, res) => {
  const time = new Date().toLocaleTimeString();
  req.logger.fatal(`${time} - ${req.method} - route: ${req.url}`)
  req.logger.error(`${time} - ${req.method} - route: ${req.url}`)
  req.logger.warning(`${time} - ${req.method} - route: ${req.url}`)
  req.logger.info(`${time} - ${req.method} - route: ${req.url}`)
  req.logger.http(`${time} - ${req.method} - route: ${req.url}`)
  req.logger.debug(`${time} - ${req.method} - route: ${req.url}`)
  res.send('Prueba de logger realizada')
  console.log('------------')
});

export default router;
