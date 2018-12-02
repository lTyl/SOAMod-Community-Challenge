import { AngelMaw } from "./Enemies/AngelMaw";
import { AngelMawMimic } from "./Enemies/AngelMawMimic";
import { BogeyMan } from "./Enemies/BogeyMan";
import { Brownie } from "./Enemies/Brownie";
import { BrownieElder } from "./Enemies/BrownieElder";
import { BrownieElderMimic } from "./Enemies/BrownieElderMimic";
import { ChromaSlime } from "./Enemies/ChromaSlime";
import { ChromaSlimeMimic } from "./Enemies/ChromaSlimeMimic";
import { EssenceRaptor } from "./Enemies/EssenceRaptor";
import { GemGnasher } from "./Enemies/GemGnasher";
import { Glintbill } from "./Enemies/Glintbill";
import { GlintBillMimic } from "./Enemies/GlintBillMimic";
import { GoldSlime } from "./Enemies/GoldSlime";
import { GuardDog } from "./Enemies/GuardDog";
import { LeftKnightOfTheRounded } from "./Enemies/LeftKnightOfTheRounded";
import { MagicGolem } from "./Enemies/MagicGolem";
import { Toadstool } from "./Enemies/Toadstool";
import { ToadstoolMimic } from "./Enemies/ToadstoolMimic";
import { Voidgeist } from "./Enemies/Voidgeist";
import { VoidGeistMimic } from "./Enemies/VoidGeistMimic";
import { Wraithling } from "./Enemies/Wraithling";
import { WraithlingBaby } from "./Enemies/WraithlingBaby";
import { Curator } from "../Models/Curator";

export class MysticCavernCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			AngelMaw: new AngelMaw(),
			AngelMawMimic: new AngelMawMimic(),
			BogeyMan: new BogeyMan(),
			Brownie: new Brownie(),
			BrownieElder: new BrownieElder(),
			BrownieElderMimic: new BrownieElderMimic(),
			ChromaSlime: new ChromaSlime(),
			ChromaSlimeMimic: new ChromaSlimeMimic(),
			EssenceRaptor: new EssenceRaptor(),
			GemGnasher: new GemGnasher(),
			Glintbill: new Glintbill(),
			GlintBillMimic: new GlintBillMimic(),
			GoldSlime: new GoldSlime(),
			GuardDog: new GuardDog(),
			LeftKnightOfTheRounded: new LeftKnightOfTheRounded(),
			MagicGolem: new MagicGolem(),
			Toadstool: new Toadstool(),
			ToadstoolMimic: new ToadstoolMimic(),
			Voidgeist: new Voidgeist(),
			VoidGeistMimic: new VoidGeistMimic(),
			Wraithling: new Wraithling(),
			WraithlingBaby: new WraithlingBaby()
		};
	}
}

export const mysticCanvernCurator = new MysticCavernCurator();