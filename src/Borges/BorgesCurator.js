import { Guard } from "./Enemies/Guard";
import { CenterPirate } from "./Enemies/CenterPirate";
import { LeftPirate } from "./Enemies/LeftPirate";
import { Pirate } from "./Enemies/Pirate";
import { PlaqueRat } from "./Enemies/PlaqueRat";
import { RightPirate } from "./Enemies/RightPirate";
import { Scoundrel2 } from "./Enemies/Scoundrel2";
import { Shadow } from "./Enemies/Shadow";
import { Curator } from "../Models/Curator";

export class BorgesCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			Guard: new Guard(),
			CenterPirate: new CenterPirate(),
			LeftPirate: new LeftPirate(),
			Pirate: new Pirate(),
			PlaqueRat: new PlaqueRat(),
			RightPirate: new RightPirate(),
			Scoundrel2: new Scoundrel2(),
			Shadow: new Shadow()
		};
	}
}

export const borgesCurator = new BorgesCurator();