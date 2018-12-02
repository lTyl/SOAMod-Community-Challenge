import { AIScript } from "../../Models/AIScript";

export class AIWasp extends AIScript{
	constructor(){
		super();
		
		/**
		 * data:
		 * - id is the actor ID of the actor running this AI Script
		 * - actor is the ig.game.actor reference of the actor running this AI script
		 */
		this.script = {
			ty_wasp_community_challengeAI: function(data){
				console.log("AI SCRIPT MOD CALLED");
				var percentHP = (data.actor.hp / data.actor.hpMax) * 100;
				console.log("PERCENTHP", percentHP);
				// If remaining HP is less than 35%, then always cast Stab
				if (percentHP <= 35){
					this.createSkillAction('33', data.id, this.getSkillData('33'), this.getFirstInjuredHero());
					console.log("SKILL");
				} else {
					this.createFightAction(data.id, this.getFirstInjuredHero());
					console.log("FIGHT");
				}
			}
		};
	}
}