import type { ConfigCtrlState } from '@spatializes/core';
import type { EthereumClient } from '@spatializes/ethereum';
import React from 'react';
/**
 * Props
 */
interface Props extends Omit<ConfigCtrlState, 'enableStandaloneMode' | 'standaloneChains' | 'walletConnectVersion'> {
    ethereumClient?: EthereumClient;
}
/**
 * Component
 */
declare function CreateWeb3Modal({ ethereumClient, ...config }: Props): JSX.Element;
export declare const Web3Modal: React.MemoExoticComponent<typeof CreateWeb3Modal>;
export {};
