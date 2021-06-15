import { Request, Response } from "express";
import * as registryCommonHandlers from "./common";
import RegistryService from "../services/registry-service";
import * as ethereumAdapter from "../../adapters/ethereum-blockchain/ethereum-adapter";

const registryService = RegistryService(ethereumAdapter);

export let deployRuntimeRegistry = (request: Request, response: Response) => {
  registryCommonHandlers.deployRuntimeRegistryHandler(registryService, response);
};

export let getRuntimeRegistryInfo = (request: Request, response: Response) => {
  registryCommonHandlers.getRuntimeRegistryInfoHandler(registryService, request, response);
};
