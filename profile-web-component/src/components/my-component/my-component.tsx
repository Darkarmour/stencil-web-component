import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() name: string;

  /**
   * The middle name
   */
  @Prop() age: number;

  /**
   * The last name
   */
  @Prop() qualification: string;

  @Prop() experience: number;


  render() {
    return <div>Hello, World! I'm {this.name}. I'm currently {this.age} and i am a {this.qualification} for {this.experience}</div>;
  }
}
