import { Router } from 'express';
import { addLogger } from '../../utils/logger.js';

const router = Router();

router.get('/', addLogger, (req, res) => {
  req.logger.fatal('FATAL')
  req.logger.error('ERROR')
  req.logger.warning('WARNING')
  req.logger.info('INFO')
  req.logger.http('HTTP')
  req.logger.debug('DEBUG')
  res.send('Prueba de logger realizada')
  console.log('------------')
});

export default router;
