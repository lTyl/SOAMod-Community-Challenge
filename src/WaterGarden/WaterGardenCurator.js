import { Axebeak } from "./Enemies/Axebeak";
import { Brownie } from "./Enemies/Brownie";
import { Crystal } from "./Enemies/Crystal";
import { Jinxbird } from "./Enemies/Jinxbird";
import { Moraga } from "./Enemies/Moraga";
import { Nik} from "./Enemies/Nik";
import { Statue } from "./Enemies/Statue";
import { Zak } from "./Enemies/Zak";
import { Curator } from "../Models/Curator";

export class WaterGardenCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			Axebeak: new Axebeak(),
			Brownie: new Brownie(),
			Crystal: new Crystal(),
			Jinxbird: new Jinxbird(),
			Moraga: new Moraga(),
			Nik: new Nik(),
			Statue: new Statue(),
			Zak: new Zak()
		};
	}
}

export const watergardenCurator = new WaterGardenCurator();