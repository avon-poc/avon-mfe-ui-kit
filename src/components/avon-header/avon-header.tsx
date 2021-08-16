import { Component, Element,Prop, Host, h } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';
import clsx from 'clsx';

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {

  @Prop() strings: any;
  @Element() element: HTMLElement;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  render() {
    return (
      <Host>
        <div class={clsx(`MyContainer`)}><swc-label label={this.strings.login} color="white" fontsize="14px"></swc-label></div>
      </Host>
    );
  }

}
