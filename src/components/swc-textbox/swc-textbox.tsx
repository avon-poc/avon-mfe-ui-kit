import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'swc-textbox',
  styleUrl: 'swc-textbox.scss',
  shadow: true,
})
export class SwcTextbox {

  @Prop() placeholder?: string;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() width?:'fullwidth' | 'mediumwidth' | 'smallwidth' = 'smallwidth';
  @Prop() shape?: 'full' |'round'|'smooth' = 'full';
  @Prop() usecase?: 'search' |'loginform' = 'search';


  render() {
         return <input type="textbox"  class={clsx(`SwcTextbox  ${this.width} ${this.shape} ${this.usecase}`)} placeholder={`${this.placeholder}`} disabled={this.disabled}></input>;
  }

}
