import { ImageSource } from 'excalibur';
import sword from './images/sword.png';
import bg from './images/bg.png';

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Sword: new ImageSource(sword),
    Bg: new ImageSource(bg),
}

export { Resources }
