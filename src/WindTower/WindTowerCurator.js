import { Zak } from "./Enemies/Zak";
import { Nik } from "./Enemies/Nik";
import { Mage } from "./Enemies/Mage";
import { Harpy } from "./Enemies/Harpy";
import { KingSemian } from "./Enemies/KingSemian";
import { MetalHawk } from "./Enemies/MetalHawk";
import { Skeleton } from "./Enemies/Skeleton";
import { WindGuardian } from "./Enemies/WindGuardian";
import { Wraith } from "./Enemies/Wraith";
import { Curator } from "../Models/Curator";

export class WindTowerCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			Zak: new Zak(),
			Nik: new Nik(),
			Mage: new Mage(),
			Harpy: new Harpy(),
			KingSemian: new KingSemian(),
			MetalHawk: new MetalHawk(),
			Skeleton: new Skeleton(),
			WindGuardian: new WindGuardian(),
			Wraith: new Wraith()
		};
	}
}

export const windTowerCurator = new WindTowerCurator();