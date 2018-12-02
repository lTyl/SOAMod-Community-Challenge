export class Weapon {
	constructor(){
		this.weapon = {};
		this.dbId = "";
	}
	update(weaponData){
		for (let key in this.weapon){
			weaponData[key] = this.weapon[key];
		}
	}
}