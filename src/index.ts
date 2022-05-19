import { Engine, Loader, DisplayMode } from 'excalibur';
import { LevelOne } from './scenes/level-one/level-one';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import { Menu } from './scenes/menu/menu';
import { Background } from './actors/background/background'
/**
 * Managed game class
 */

class SendToMenu extends Engine {
  width: 981
  height: 681
  private background: Background;
  private menu: Menu;



  constructor() {
    super({ displayMode: DisplayMode.Fixed });
  }

  
  public start() {

    // Create new scene with a player
    this.menu = new Menu();
    this.background = new Background();
    this.menu.add(this.background);

    game.add('Menu', this.menu);

    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    return super.start(loader);
  }
  
 

}

const gamestart = new SendToMenu();
gamestart.goToScene('Menu');

class Game extends Engine {
  width: 981
  height: 681
  private player: Player;
  private levelOne: LevelOne;



  constructor() {
    super({ displayMode: DisplayMode.Fixed });
  }

  
  public start() {

    // Create new scene with a player
    this.levelOne = new LevelOne();
    this.player = new Player();
    this.levelOne.add(this.player);

    game.add('levelOne', this.levelOne);

    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    return super.start(loader);
  }
}

const game = new Game();
game.start().then(() => {
  game.goToScene('levelOne');
});
