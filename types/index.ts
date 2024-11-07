export interface ProjectType{
    slug:string;
    name:string;
    description:string;
    thumbnail:string;
    github:string;
    website:string;
    type:'web'|'mobile';
    tools:string[]
}