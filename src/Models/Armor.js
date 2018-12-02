export class Armor {
	constructor(){
		this.armor = {};
		this.dbId = "";
	}
	update(armorData){
		for (let key in this.armor){
			armorData[key] = this.armor[key];
		}
	}
}