import type { ConfigCtrlState } from '@spatializes/core';
/**
 * Types
 */
type Web3ModalConfig = Omit<ConfigCtrlState, 'enableStandaloneMode'> & {
    walletConnectVersion: 1 | 2;
};
/**
 * Client
 */
export declare class Web3Modal {
    constructor(config: Web3ModalConfig);
    private initUi;
    openModal: any;
    closeModal: any;
    subscribeModal: any;
    setTheme: any;
}
export {};
