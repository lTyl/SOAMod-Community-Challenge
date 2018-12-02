import { CaveCrystal } from "./Enemies/CaveCrystal";
import { CaveSlime } from "./Enemies/CaveSlime";
import { CaveSpider } from "./Enemies/CaveSpider";
import { Eater } from "./Enemies/Eater";
import { Golem } from "./Enemies/Golem";
import { Nik } from "./Enemies/Nik";
import { Serpent } from "./Enemies/Serpent";
import { Zak } from "./Enemies/Zak";
import { Curator } from "../Models/Curator";

export class PassagewayCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			CaveCrystal: new CaveCrystal(),
			CaveSlime: new CaveSlime(),
			CaveSpider: new CaveSpider(),
			Eater: new Eater(),
			Golem: new Golem(),
			Nik: new Nik(),
			Serpent: new Serpent(),
			Zak: new Zak()
		};
	}
}

export const passagewayCurator = new PassagewayCurator();