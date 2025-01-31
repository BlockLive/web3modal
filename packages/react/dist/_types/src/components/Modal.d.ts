import type { W3mModal } from '@spatializes/ui';
/**
 * Component
 */
export declare function Modal(props: JSX.IntrinsicElements['w3m-modal']): JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-modal': Partial<W3mModal>;
        }
    }
}
