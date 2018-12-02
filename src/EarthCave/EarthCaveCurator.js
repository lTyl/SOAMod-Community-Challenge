import { BogeyMan } from "./Enemies/BogeyMan";
import { DefiledPriest } from "./Enemies/DefiledPriest";
import { Devourer } from "./Enemies/Devourer";
import { GoldSlime } from "./Enemies/GoldSlime";
import { LeftKnightOfTheRounded } from "./Enemies/LeftKnightOfTheRounded";
import { MagicGolem } from "./Enemies/MagicGolem";
import { Malvil } from "./Enemies/Malvil";
import { RightKnightOfTheRounded } from "./Enemies/RightKnightOfTheRounded";
import { Curator } from "../Models/Curator";

export class EarthCaveCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			BogeyMan: new BogeyMan(),
			DefiledPriest: new DefiledPriest(),
			Devourer: new Devourer(),
			GoldSlime: new GoldSlime(),
			LeftKnightOfTheRounded: new LeftKnightOfTheRounded(),
			MagicGolem: new MagicGolem(),
			Malvil: new Malvil(),
			RightKnightOfTheRounded: new RightKnightOfTheRounded()
		};
	}
}

export const earthCaveCurator = new EarthCaveCurator();