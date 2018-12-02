import { Hawk } from "./Enemies/Hawk";
import { Hooligan } from "./Enemies/Hooligan";
import { MasterThief } from "./Enemies/MasterThief";
import { Ruffian } from "./Enemies/Ruffian";
import { Scoundrel } from "./Enemies/Scoundrel";
import { Spider } from "./Enemies/Spider";
import { Thief } from "./Enemies/Thief";
import { Wolf } from "./Enemies/Wolf";
import { Wraithshroom } from "./Enemies/Wraithshroom";
import { Curator } from "../Models/Curator";

export class MistyWoodsCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			Hawk: new Hawk(),
			Hooligan: new Hooligan(),
			MasterThief: new MasterThief(),
			Ruffian: new Ruffian(),
			Scoundrel: new Scoundrel(),
			Spider: new Spider(),
			Thief: new Thief(),
			Wolf: new Wolf(),
			Wraithshroom: new Wraithshroom()
		};
	}
}

export const mistyWoodsCurator = new MistyWoodsCurator();