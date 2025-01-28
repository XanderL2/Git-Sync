import { Plugin } from 'obsidian';
import { CompatibilityService } from './src/core/compatibility-detector/compatibility.service';
import { CompatibilityResult } from './src/core/compatibility-detector/models/CompatibilityResult';



export default class GitSyncPlugin extends Plugin {

	private compatibilityService: CompatibilityService;

	async onload() {

		this.initializeDependencies();

		const compatibilityResults: CompatibilityResult = await this.compatibilityService.StartCompatibilityTest();	

		console.clear();
		console.log("*****************");
		console.log(compatibilityResults);

	}

















	private initializeDependencies(){
		this.compatibilityService = new CompatibilityService(window.navigator.userAgent);
	}

}
