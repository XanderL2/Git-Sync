import { exec } from "child_process";
import { CompatibilityResult } from "./models/CompatibilityResult";

export class CompatibilityService {

    public constructor(private platform: string){}

    public async StartCompatibilityTest(): Promise<CompatibilityResult> {

        const isMobile = this.IsMobile();

        if(isMobile) return { isMobile: true, hasGitInstalled: false}

        try {

            const hasGit = await this.HasGitInstalled();
            return { isMobile: false, hasGitInstalled: hasGit};

        } catch (error) {
            return { isMobile: false, hasGitInstalled: false}; 
        }
    }

    private IsMobile() : boolean {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(this.platform);
        if(isMobile) return true;
        return false;
    }

    private HasGitInstalled() : Promise<boolean>{
        return new Promise((resolve, reject) => {
            exec('git --version', (err, stdout, stderr) => {
                if(err || stderr) reject(false);
                resolve(true);
            });
        })
    }

}