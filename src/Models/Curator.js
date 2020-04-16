export class Curator {
	constructor(){
		this.enemies = {};
		this.aiScripts = {};
		this.weapons = {};
		this.armors = {};
		this.artifacts = {};
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
		
		// Update all weapons
		for (let weaponId in this.weapons){
			let weapon = this.weapons[weaponId];
			weapon.update(window.ig.global.stats.weapons.list[weapon.dbId]);
		}
		
		// Update all armors
		for (let armorId in this.armors){
			let armor = this.armors[armorId];
			armor.update(window.ig.global.stats.armors.list[armor.dbId]);
		}
		
		// Update all artifacts
		for (let artifactId in this.artifacts){
			let artifact = this.artifacts[artifactId];
			artifact.update(window.ig.global.stats.artifacts.list[artifactId.dbId]);
			artifact.update(window.ig.global.accessories.list[artifactId.dbId]);
		}
	}
}
