import { BetaOrazio } from "./Enemies/BetaOrazio";
import { BlueSlime } from "./Enemies/BlueSlime";
import { CadaverousBloom } from "./Enemies/CadaverousBloom";
import { Cobra } from "./Enemies/Cobra";
import { CrystalKnight } from "./Enemies/CrystalKnight";
import  { DesertDragon } from "./Enemies/DesertDragon";
import { DisasterCake } from "./Enemies/DisasterCake";
import { EliteHeadhunter } from "./Enemies/EliteHeadhunter";
import { ExaltedOne } from "./Enemies/ExaltedOne";
import { GreedCrystal } from "./Enemies/GreedCrystal";
import { LastSlime } from "./Enemies/LastSlime";
import { LustCrystal } from "./Enemies/LustCrystal";
import { MoonLighter } from "./Enemies/MoonLighter";
import { MysticWolf } from "./Enemies/MysticWolf";
import { Oracle } from "./Enemies/Oracle";
import { OrazioHuman } from "./Enemies/OrazioHuman";
import { Poltergeist } from "./Enemies/Poltergeist";
import { Prowler } from "./Enemies/Prowler";
import { Shadow2 } from "./Enemies/Shadow2";
import { SlimeBoss } from "./Enemies/SlimeBoss";
import { Thief2 } from "./Enemies/Thief2";
import { WraithVine } from "./Enemies/WraithVine";
import { WrathCrystal } from "./Enemies/WrathCrystal";

import { Curator } from "../Models/Curator";

export class MistyWoodsCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			BetaOrazio: new BetaOrazio(),
			BlueSlime: new BlueSlime(),
			CadaverousBloom: new CadaverousBloom(),
			Cobra: new Cobra(),
			CrystalKnight: new CrystalKnight(),
			DesertDragon: new DesertDragon(),
			DisasterCake: new DisasterCake(),
			EliteHeadhunter: new EliteHeadhunter(),
			ExaltedOne: new ExaltedOne(),
			GreedCrystal: new GreedCrystal(),
			LastSlime: new LastSlime(),
			LustCrystal: new LustCrystal(),
			MoonLighter: new MoonLighter(),
			MysticWolf: new MysticWolf(),
			Oracle: new Oracle(),
			OrazioHuman: new OrazioHuman(),
			Poltergeist: new Poltergeist(),
			Prowler: new Prowler(),
			Shadow2: new Shadow2(),
			SlimeBoss: new SlimeBoss(),
			Thief2: new Thief2(),
			WraithVine: new WraithVine(),
			WrathCrystal: new WrathCrystal()
		};
	}
}

export const wraithAbyssCurator = new MistyWoodsCurator();