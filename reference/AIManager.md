# Shadows of Adam - AIManager Script Reference

Methods:

`getRandomSkillFromList(skillList[Skill], min: number, max: number)`

`removeAllAllyCommandsFromCurrentActionQueue()`

`checkIfCurrentActionHasSkillType(type: string)`

`getTotalAllyCount(id)`
- id = The requester actor ID

`checkIfCurrentActionHasSkillID(id: string)`
- id = The skill ID to check against

`checkIfCurrentActionHasSkillAnimation(id: string)`
- id = the animation ID to check against

`getTargetBySkillID(id: string)`
- id = The skill ID

`getTargetByName(name: string)`

`getAllActiveEnemyActorID()`

`getFirstInjuredEnemy()`

`getFirstInjuredHero()`

`checkIfEnoughMP(id: number, skillID: string)`

`canUseSkill(id: number)`

`getRandomNumber(min: number, max: number)`

`getPercent(cur: number, max: number)`

`getSkillData(skillID: string)`

`selectRandomTarget()`

`selectRandomEnemy()`

`sendDataToActor(from: number, target: number|string, data)`

Sends AI data to another AI enemy, allowing them to communicate with each other. This data is cleared at the end of the enemy input phase
- from The ID of the sending actor
- target The ID of the target actor
- data The data to send

`selectRandomAlly()`

`selectRandomAllyExceptSelf()`

`createFightAction(actorID: number, target: number)`

Creates a standard "Attack" action

`createSkillAction(skillID: string, casterID: number, skillData: Skill, target: string|number, manualtarget?)`

Creates a Skill use action
- @param skillID {Integer} The ID of the skill being cast
- @param casterID {Integer} The actor ID casting the skill
- @param skillData {Object} The data of the skill
- @param target {Integer} The actor ID being hit with the skill

`skillUse(data)`
- data is value passed into the AI Script from AIManager. This performs the default SOA AI Script with chance of using a skill or a fight action.

`attackUse(data)`
- data is value passed into the AI Script from AIManager. This simply creates an attack action
