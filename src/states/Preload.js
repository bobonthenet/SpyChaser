class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
		this.game.load.image('road', 'assets/roadAsphalt.jpg');
		this.game.load.atlas('spycar', 'assets/spycar.png', 'assets/spycar.json');
		this.game.load.spritesheet('enemycar', 'assets/enemycar.png', 208, 444);
		this.game.load.spritesheet('explosion', 'assets/explosion.png', 53, 49);
		this.game.load.audio('carExploding', 'assets/ChunkyExplosion.mp3');
		this.game.load.audio('carCrash', 'assets/CarCrash.ogg');
		this.game.load.audio('music', 'assets/RequiemTheTranquility.ogg', 'assets/RequiemTheTranquility.mp3');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
