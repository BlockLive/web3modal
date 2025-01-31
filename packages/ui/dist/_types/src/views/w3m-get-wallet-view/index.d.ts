import { LitElement } from 'lit';
export declare class W3mGetWalletView extends LitElement {
    static styles: any[];
    private readonly explorerUrl;
    private onGet;
    private onExplore;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-get-wallet-view': W3mGetWalletView;
    }
}
