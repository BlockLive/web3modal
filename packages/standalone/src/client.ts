import type { ConfigCtrlState } from '@spatializes/core'
import { ConfigCtrl, ModalCtrl, OptionsCtrl } from '@spatializes/core'

/**
 * Types
 */
type Web3ModalConfig = Omit<ConfigCtrlState, 'enableStandaloneMode'> & {
  walletConnectVersion: 1 | 2
}

/**
 * Client
 */
export class Web3Modal {
  public constructor(config: Web3ModalConfig) {
    ConfigCtrl.setConfig({ enableStandaloneMode: true, ...config })
    this.initUi()
  }

  private async initUi() {
    if (typeof window !== 'undefined') {
      await import('@spatializes/ui')
      const modal = document.createElement('w3m-modal')
      document.body.insertAdjacentElement('beforeend', modal)
      OptionsCtrl.setIsUiLoaded(true)
    }
  }

  public openModal = ModalCtrl.open

  public closeModal = ModalCtrl.close

  public subscribeModal = ModalCtrl.subscribe

  public setTheme = ConfigCtrl.setThemeConfig
}
