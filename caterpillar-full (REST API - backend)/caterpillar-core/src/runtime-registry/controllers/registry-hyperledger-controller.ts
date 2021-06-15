import { Request, Response } from "express";

import RegistryService from "../services/registry-service";
import * as registryCommonHandlers from "./common";
import * as hyperledgerAdapter from "../../adapters/ethereum-blockchain/hyperledger-adapter";

const registryService = RegistryService(hyperledgerAdapter);

export let deployRuntimeRegistry = (request: Request, response: Response) => {
  registryCommonHandlers.deployRuntimeRegistryHandler(registryService, response);
};

export let getRuntimeRegistryInfo = (request: Request, response: Response) => {
  registryCommonHandlers.getRuntimeRegistryInfoHandler(registryService, request, response);
};
