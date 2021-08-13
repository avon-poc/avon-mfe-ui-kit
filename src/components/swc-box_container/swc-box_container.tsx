import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swc-box_container',
  styleUrl: 'swc-box_container.css',
  shadow: true,
})
export class SwcBox_Container {
  /**
   * Width
   */
  @Prop() width: string ="100%";

 /**
   * background-color
   */
  @Prop() backgroundcolor: string = "white";

  /**
   * height
   */
  @Prop() height: string = "300px";

 


  render() {
    return <div style={{'background-color':this.backgroundcolor,'width':this.width,'height':this.height}}></div>;
  }
}
