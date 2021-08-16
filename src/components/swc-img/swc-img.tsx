import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swc-img',
  styleUrl: 'swc-img.css',
  shadow: true,
})
export class SwcImg {

  /**
    * src
    */
  @Prop() src: string = "https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg";

  /**
  * width
  */
  @Prop() width: string = "100";

  /**
  * height
  */
  @Prop() height: string = "100";

  /**
  * alt
  */
  @Prop() alt: string = "sample_image";


  render() {
    return <img width={this.width} height={this.height} alt={this.alt} src={this.src}/>;
  }
}
