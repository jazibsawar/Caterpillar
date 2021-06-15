import { Router } from 'express';
const router: Router = Router();

import * as registryCtrl from '../controllers/registry-controller';
import * as registryHyperledgerCtrl from '../controllers/registry-hyperledger-controller';

router.post('/registries', registryCtrl.deployRuntimeRegistry);
router.get('/registries/:registryAddress/address', registryCtrl.getRuntimeRegistryInfo);
router.get('/registries/:registryId', registryCtrl.getRuntimeRegistryInfo);

router.post('/hyperledger/registries', registryHyperledgerCtrl.deployRuntimeRegistry);
router.get('/hyperledger/registries/:registryAddress/address', registryHyperledgerCtrl.getRuntimeRegistryInfo);
router.get('/hyperledger/registries/:registryId', registryHyperledgerCtrl.getRuntimeRegistryInfo);

module.exports = router;