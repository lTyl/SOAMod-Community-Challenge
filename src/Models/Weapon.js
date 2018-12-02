export class Weapon {
	constructor(){
		this.weapon = {};
		this.dbId = "";
	}
	update(weaponData){
		if (!weaponData){
			window.ig.global.stats.weapons.list[this.dbId] = this.weapon;
		} else {
			for (let key in this.weapon){
				weaponData[key] = this.weapon[key];
			}
		}
	}
}