import type { Listing } from '@spatializes/core';
import type { TemplateResult } from 'lit';
export declare const DataFilterUtil: {
    allowedExplorerListings(listings: Listing[]): Listing[];
    walletsWithInjected<T extends unknown>(wallets?: T[] | undefined): T[];
    connectorWallets(): any;
    walletTemplatesWithRecent(walletsTemplate: TemplateResult<1>[], recentTemplate?: TemplateResult<1>): TemplateResult<1>[];
    deduplicateExplorerListingsFromConnectors(listings: Listing[]): Listing[];
};
