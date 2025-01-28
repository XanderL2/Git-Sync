import { CommitProps } from "../models/CommitProps";
import { GithubBaseService } from "../models/GithubBase";

export class NoGitService extends GithubBaseService {
    public IsValidRepo(repoURL: string): boolean {
        throw new Error("Method not implemented.");
    }
    public AddChanges(): boolean {
        throw new Error("Method not implemented.");
    }

    public CommitChanges(): boolean {
        throw new Error("Method not implemented.");
    }

    public PullChanges(): boolean {
        throw new Error("Method not implemented.");
    }

    public CreateBranch(): boolean {
        throw new Error("Method not implemented.");
    }

    public RestoreChanges(commitHash: string): CommitProps {
        throw new Error("Method not implemented.");
    }
    
}