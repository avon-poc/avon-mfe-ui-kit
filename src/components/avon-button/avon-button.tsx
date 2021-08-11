import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'avon-button',
  styleUrl: 'avon-button.css',
  shadow: true,
})
export class AvonButton {
  /**
   *  Button Label
   */
  @Prop() buttonLabel: string='Button';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';



  render() {
    return <button type="button"  class={clsx(`MyButton  ${this.size}`)} disabled={this.disabled}>{this.buttonLabel}</button>;
  }
}
