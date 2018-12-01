export class Enemy {
	constructor(){
		this.model = {};
		this.dbId = "";
	}
	update(enemyData){
		for (let key in this.model){
			enemyData[key] = this.model[key];
		}
	}
}