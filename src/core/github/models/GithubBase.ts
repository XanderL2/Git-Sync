import { CommitProps } from "./CommitProps";

export abstract class GithubBaseService {

    protected token: string;
    protected urlRepo: string;
    protected user: string;
    protected BRANCH = "github-sync";


    public abstract AddChanges(): boolean;
    public abstract CommitChanges(): boolean;
    public abstract PullChanges(): boolean;
    public abstract CreateBranch(): boolean;
    public abstract RestoreChanges(commitHash: string): CommitProps;
    public abstract IsValidRepo(repoURL: string): boolean;

}