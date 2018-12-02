export class Armor {
	constructor(){
		this.armor = {};
		this.dbId = "";
	}
	update(armorData){
		if (!armorData){
			window.ig.global.stats.armor.list[this.dbId] = this.armor;
		} else {
			for (let key in this.armor){
				armorData[key] = this.armor[key];
			}
		}
	}
}