export interface ExtensionConfigs {

    GithubToken: string
    UrlRepo: string
    WorkOnCurrentRepo:boolean, 
    EnableAutoPush: boolean 

}


export const DEFAULT_SETTINGS: ExtensionConfigs = {

    GithubToken: "",
    UrlRepo: "",
    WorkOnCurrentRepo: true,
    EnableAutoPush: true,

}