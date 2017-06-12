export default class RoadLine extends Phaser.Sprite {

	constructor({game, x, y, rect}){
		super(game, x, y, rect);
		this.game = game;
		this.alpha =.5
	}

	update() {
		this.position.y += 7;

		if(this.position.y > this.game.camera.view.bottom) {
			this.kill();
		}
	}

	reset({x,y}) {
		super.reset(x,y);
	}
}
