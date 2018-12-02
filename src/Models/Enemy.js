export class Enemy {
	constructor(){
		this.model = {};
		this.dbId = "";
	}
	update(enemyData){
		if (!enemyData){
			window.ig.global.stats.enemies.list[this.dbId] = this.model;
		} else {
			for (let key in this.model){
				enemyData[key] = this.model[key];
			}
		}
		}
}