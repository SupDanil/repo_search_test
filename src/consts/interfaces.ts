export interface repoProp {
    id: any;
    html_url: string;
    name: string;
    description: string;
    owner: {
        avatar_url: string
    }
}

export interface buttonProps{
    limit: number
    fetchRepos: (nextPage?:boolean|undefined) => Promise<void>
}
