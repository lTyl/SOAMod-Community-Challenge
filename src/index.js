import { tangleCurator } from "./Tangle/TangleCurator";
import { mistyWoodsCurator } from "./MistyWood/MistyWoodsCurator";
import { windTowerCurator } from "./WindTower/WindTowerCurator";
import { borgesCurator } from "./Borges/BorgesCurator";
import { earthCaveCurator } from "./EarthCave/EarthCaveCurator";
import { wraithAbyssCurator } from "./WraithAbyss/WraithAbyssCurator";
import { magmaSanctumCurator } from "./MagmaSanctum/MagmaSanctumCurator";
import { mysticCanvernCurator } from "./MysticCavern/MysticCavernCurator";
import { passagewayCurator } from "./Passageway/PassagewayCurator";
import { watergardenCurator } from "./WaterGarden/WaterGardenCurator";

(function(){
	// Update game data for each area
	tangleCurator.update();
	mistyWoodsCurator.update();
	windTowerCurator.update();
	borgesCurator.update();
	earthCaveCurator.update();
	wraithAbyssCurator.update();
	magmaSanctumCurator.update();
	mysticCanvernCurator.update();
	passagewayCurator.update();
	watergardenCurator.update();
	
	console.log("'Community Challenge' mod loaded!");
})();