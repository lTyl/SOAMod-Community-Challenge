export class AIScript {
	constructor(){
		// the ig.AIManager namespace in the Shadows of Adam API contains methods for AI Management
		this.manager = window.AIManager;
		// The script represents the model of your new AI Script.
		// The script will also be called with the context of AIManager
		this.script = {};
	}
	
	/**
	 * This method called the AIManager inject() method for the SOA API. This injects your script into the AIManager
	 */
	injector(){
		window.AIManager.inject(this.script);
	}
}