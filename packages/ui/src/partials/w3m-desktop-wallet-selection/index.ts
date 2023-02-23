import type { DesktopConnectorData } from '@spatializes/core'
import { ConfigCtrl, ExplorerCtrl, OptionsCtrl, RouterCtrl } from '@spatializes/core'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { InjectedId } from '../../presets/EthereumPresets'
import { DataFilterUtil } from '../../utils/DataFilterUtil'
import { ThemeUtil } from '../../utils/ThemeUtil'
import { UiUtil } from '../../utils/UiUtil'
import styles from './styles.css'

@customElement('w3m-desktop-wallet-selection')
export class W3mDesktopWalletSelection extends LitElement {
  public static styles = [ThemeUtil.globalCss, styles]

  // -- private ------------------------------------------------------ //
  private onDesktopWallet(data: DesktopConnectorData) {
    RouterCtrl.push('DesktopConnector', { DesktopConnector: data })
  }

  private onInjectedWallet() {
    RouterCtrl.push('InjectedConnector')
  }

  private onInstallConnector() {
    RouterCtrl.push('InstallConnector', {
      InstallConnector: {
        id: 'metaMask',
        name: 'MetaMask',
        isMobile: true,
        url: 'https://metamask.io'
      }
    })
  }

  private async onConnectorWallet(id: string) {
    if (!window.ethereum) {
      this.onInstallConnector()
    } else if (id === 'injected' || id === InjectedId.metaMask) {
      this.onInjectedWallet()
    } else {
      await UiUtil.handleConnectorConnection(id)
    }
  }

  private desktopWalletsTemplate() {
    const { desktopWallets } = ConfigCtrl.state

    return desktopWallets?.map(
      ({ id, name, links: { universal, native } }) => html`
        <w3m-wallet-button
          walletId=${id}
          name=${name}
          .onClick=${() => this.onDesktopWallet({ name, walletId: id, universal, native })}
        ></w3m-wallet-button>
      `
    )
  }

  private previewWalletsTemplate() {
    let wallets = DataFilterUtil.allowedExplorerListings(ExplorerCtrl.state.previewWallets)
    wallets = DataFilterUtil.deduplicateExplorerListingsFromConnectors(wallets)

    return wallets.map(
      ({ name, desktop: { universal, native }, homepage, image_url, id }) => html`
        <w3m-wallet-button
          src=${image_url.lg}
          name=${name}
          .onClick=${() =>
            this.onDesktopWallet({
              walletId: id,
              name,
              native,
              universal: universal || homepage,
              icon: image_url.lg
            })}
        ></w3m-wallet-button>
      `
    )
  }

  private connectorWalletsTemplate() {
    const wallets = DataFilterUtil.connectorWallets()

    return wallets.map(
      ({ id, name, ready }) => html`
        <w3m-wallet-button
          .installed=${['injected', 'metaMask'].includes(id) && ready}
          name=${name}
          walletId=${id}
          .onClick=${async () => this.onConnectorWallet(id)}
        ></w3m-wallet-button>
      `
    )
  }

  private recentWalletTemplate() {
    const wallet = UiUtil.getRecentWallet()

    if (!wallet) {
      return undefined
    }

    const { id, name, links, image } = wallet

    return html`
      <w3m-wallet-button
        .recent=${true}
        name=${name}
        walletId=${ifDefined(id)}
        src=${ifDefined(image)}
        .onClick=${() =>
          this.onDesktopWallet({
            name,
            walletId: id,
            universal: links?.universal,
            native: links?.native,
            icon: image
          })}
      ></w3m-wallet-button>
    `
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const { standaloneUri } = OptionsCtrl.state
    const desktopTemplate = this.desktopWalletsTemplate()
    const previewTemplate = this.previewWalletsTemplate()
    const connectorTemplate = this.connectorWalletsTemplate()
    const recentTemplate = this.recentWalletTemplate()
    const linkingWallets = [...(desktopTemplate ?? []), ...previewTemplate]
    const combinedWallets = [...connectorTemplate, ...linkingWallets]
    const combinedWalletsWithRecent = DataFilterUtil.walletTemplatesWithRecent(
      combinedWallets,
      recentTemplate
    )
    const linkingWalletsWithRecent = DataFilterUtil.walletTemplatesWithRecent(
      linkingWallets,
      recentTemplate
    )
    const displayWallets = standaloneUri ? linkingWalletsWithRecent : combinedWalletsWithRecent
    const isViewAll = displayWallets.length > 4
    let wallets = []

    if (isViewAll) {
      const filtered = displayWallets.filter(
        wallet => !wallet.values.includes(InjectedId.coinbaseWallet)
      )
      wallets = filtered.slice(0, 3)
    } else {
      wallets = displayWallets
    }

    return html`
      <w3m-modal-content>
        <w3m-walletconnect-qr></w3m-walletconnect-qr>
      </w3m-modal-content>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-desktop-wallet-selection': W3mDesktopWalletSelection
  }
}
