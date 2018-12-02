import { Ghost } from "./Enemies/Ghost";
import { GreaterShroom } from "./Enemies/GreaterShroom";
import { Mosquito } from "./Enemies/Mosquito";
import { MuckWolf } from "./Enemies/MuckWolf";
import { Overgrowth } from "./Enemies/Overgrowth";
import { SunkenBones } from "./Enemies/SunkenBones";
import { Curator } from "../Models/Curator";

export class SwampCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			Ghost: new Ghost(),
			GreaterShroom: new GreaterShroom(),
			Mosquito: new Mosquito(),
			MuckWolf: new MuckWolf(),
			Overgrowth: new Overgrowth(),
			SunkenBones: new SunkenBones()
		};
	}
}

export const swampCurator = new SwampCurator();