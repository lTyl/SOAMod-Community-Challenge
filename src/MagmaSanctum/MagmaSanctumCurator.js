import { Adhain } from "./Enemies/Adhain";
import { BombSpider } from "./Enemies/BombSpider";
import { DradoraGuard } from "./Enemies/DradoraGuard";
import { Flame } from "./Enemies/Flame";
import { GuardDog } from "./Enemies/GuardDog";
import { Nik } from "./Enemies/Nik";
import { RatMagma } from "./Enemies/RatMagma";
import { Salamander } from "./Enemies/Salamander";
import { SlimeMagma } from "./Enemies/SlimeMagma";
import { Zak } from "./Enemies/Zak";
import { Curator } from "../Models/Curator";

export class MagmaSanctumCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			Adhain: new Adhain(),
			BombSpider: new BombSpider(),
			DradoraGuard: new DradoraGuard(),
			Flame: new Flame(),
			GuardDog: new GuardDog(),
			Nik: new Nik(),
			RatMagma: new RatMagma(),
			Salamander: new Salamander(),
			SlimeMagma: new SlimeMagma(),
			Zak: new Zak()
		};
	}
}

export const magmaSanctumCurator = new MagmaSanctumCurator();