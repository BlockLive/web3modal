import type { Chain, Connector } from '@wagmi/core';
import { disconnect, fetchBalance, fetchEnsAvatar, fetchEnsName, getAccount, getNetwork, switchNetwork, watchAccount, watchNetwork } from '@wagmi/core';
import type { ConnectorId } from './types';
type WalletConnectVersion = 1 | 2;
export declare class EthereumClient {
    private readonly wagmi;
    walletConnectUri: string;
    walletConnectVersion: WalletConnectVersion;
    readonly chains: Chain[];
    constructor(wagmi: any, chains: Chain[]);
    private getDefaultConnectorChainId;
    private connectWalletConnectV1;
    private connectWalletConnectV2;
    namespace: string;
    getDefaultChain(): Chain;
    getConnectorById(id: ConnectorId | string): Connector<any, any, any>;
    getConnectors(): Connector<any, any, any>[];
    connectWalletConnect(onUri: (uri: string) => void, selectedChainId?: number): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core/dist/index-35b6525c").P>>;
    connectConnector(connectorId: ConnectorId | string, selectedChainId?: number): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core/dist/index-35b6525c").P>>;
    disconnect: typeof disconnect;
    getAccount: typeof getAccount;
    watchAccount: typeof watchAccount;
    fetchBalance: typeof fetchBalance;
    getNetwork: typeof getNetwork;
    watchNetwork: typeof watchNetwork;
    switchNetwork: typeof switchNetwork;
    fetchEnsName: typeof fetchEnsName;
    fetchEnsAvatar: typeof fetchEnsAvatar;
}
export {};
