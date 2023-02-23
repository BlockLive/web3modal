import type { ConfigCtrlState } from '@spatializes/core';
import type { EthereumClient } from '@spatializes/ethereum';
/**
 * Types
 */
type Web3ModalConfig = Omit<ConfigCtrlState, 'enableStandaloneMode' | 'standaloneChains' | 'walletConnectVersion'>;
/**
 * Client
 */
export declare class Web3Modal {
    constructor(config: Web3ModalConfig, client: EthereumClient);
    private initUi;
    openModal: any;
    closeModal: any;
    subscribeModal: any;
    setTheme: any;
    setDefaultChain: any;
}
export {};
