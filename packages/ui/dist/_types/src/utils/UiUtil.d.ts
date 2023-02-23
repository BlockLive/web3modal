import type { LitElement } from 'lit';
import type { RecentWallet } from './TypesUtil';
export declare const UiUtil: {
    MOBILE_BREAKPOINT: number;
    W3M_RECENT_WALLET: string;
    rejectStandaloneButtonComponent(): void;
    getShadowRootElement(root: LitElement, selector: string): HTMLElement;
    getWalletId(id: string): string;
    getWalletIcon(id: string): any;
    getWalletName(name: string, short?: boolean): string;
    getChainIcon(chainId: number | string): any;
    getTokenIcon(symbol: string): any;
    isMobileAnimation(): boolean;
    preloadImage(src: string): Promise<unknown>;
    getErrorMessage(err: unknown): string;
    debounce(func: (...args: any[]) => unknown, timeout?: number): (...args: unknown[]) => void;
    handleMobileLinking(wallet: RecentWallet): Promise<void>;
    handleAndroidLinking(): Promise<void>;
    handleUriCopy(): Promise<void>;
    handleConnectorConnection(id: string, onError?: () => void): Promise<void>;
    getCustomWallets(): any;
    getCustomImageUrls(): unknown[];
    getConnectorImageUrls(): any;
    truncate(value: string, strLen?: number): string;
    generateAvatarColors(address: string): void;
    setRecentWallet(wallet: RecentWallet): void;
    getRecentWallet(): RecentWallet | undefined;
    getExtensionWallets(): {
        name: string;
        icon: string;
        url: string;
        isMobile?: boolean | undefined;
        isDesktop?: boolean | undefined;
        isInjected?: boolean | undefined;
        id: string;
    }[];
    caseSafeIncludes(str1: string, str2: string): boolean;
};
