import { Actor, Color, vec } from 'excalibur';
import { Resources } from '../../resources';

export class Background extends Actor {
  constructor() {
    super({
      pos: vec(0,0),
      width: 981,
      height: 653,
      color: new Color(255, 255, 255)
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Bg.toSprite());
  }
}
