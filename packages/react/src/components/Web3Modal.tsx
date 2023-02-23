import type { ConfigCtrlState } from '@spatializes/core'
import { ClientCtrl, ConfigCtrl, OptionsCtrl } from '@spatializes/core'
import type { EthereumClient } from '@spatializes/ethereum'
import React, { memo, useCallback, useEffect } from 'react'
import { Modal } from './Modal'

/**
 * Props
 */
interface Props
  extends Omit<
    ConfigCtrlState,
    'enableStandaloneMode' | 'standaloneChains' | 'walletConnectVersion'
  > {
  ethereumClient?: EthereumClient
}

/**
 * Component
 */
function CreateWeb3Modal({ ethereumClient, ...config }: Props) {
  const onConfigure = useCallback(async () => {
    if (ethereumClient) {
      ClientCtrl.setEthereumClient(ethereumClient)
    }
    ConfigCtrl.setConfig({ ...config, walletConnectVersion: ethereumClient?.walletConnectVersion })
    await import('@spatializes/ui')
    OptionsCtrl.setIsUiLoaded(true)
  }, [ethereumClient, config])

  useEffect(() => {
    onConfigure()
  }, [onConfigure])

  return <Modal />
}

export const Web3Modal = memo(CreateWeb3Modal)
