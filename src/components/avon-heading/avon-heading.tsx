import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'avon-heading',
  styleUrl: 'avon-heading.css',
  shadow: true,
})
export class AvonHeading {
  /**
   * The first name
   */
  @Prop() label: string;
  @Prop() level?: 'h1' | 'h2' | 'h3' = 'h1';


  render() {
    return this.level==='h1'?<h1>{this.label}</h1>:this.level==='h2'?<h2>{this.label}</h2>:<h3>{this.label}</h3>;
  }
}
