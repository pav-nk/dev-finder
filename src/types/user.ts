export type LocalGitHubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos: number,
    followers: 3,
    following: 10,
    created: string,
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: 3,
    following: 10,
    created_at: string,
}

export type GithubError = {
    message: string,
    documentation_url: string
}