import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'avon-button',
  styleUrl: 'avon-button.scss',
  shadow: true,
})
export class AvonButton {
  /**
   *  Button Label
   */
  @Prop() label: string='Button';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';
  @Prop() shape?: 'full' |'round'|'smooth' = 'smooth';
  @Prop() color?: 'primary' |'secondary'= 'primary';
  @Prop() width?:'fullwidth' | 'mediumwidth' | 'smallwidth' = 'smallwidth';



  render() {
    return <button type="button"  class={clsx(`MyButton  ${this.size} ${this.width} ${this.shape} ${this.color}`)} disabled={this.disabled}>{this.label}</button>;
  }
}
