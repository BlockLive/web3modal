import type { W3mCoreButton } from '@spatializes/ui';
/**
 * Component
 */
export declare function Web3Button(props: JSX.IntrinsicElements['w3m-core-button']): JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-core-button': Pick<W3mCoreButton, 'balance' | 'icon' | 'label'>;
        }
    }
}
