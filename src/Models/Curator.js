export class Curator {
	constructor(){
		this.enemies = {};
		this.aiScripts = {};
	}
	
	update() {
		// Update all enemies
		for (let enemyId in this.enemies){
			let enemy = this.enemies[enemyId];
			enemy.update(window.ig.global.stats.enemies.list[enemy.dbId]);
		}
		
		// Inject new AI Scripts into Shadows of Adam
		for (let scriptKey in this.aiScripts){
			let script = this.aiScripts[scriptKey];
			script.injector();
		}
	}
}