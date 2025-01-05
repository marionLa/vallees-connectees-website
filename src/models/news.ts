export interface News {
    title: string;
    content: string;
    date: string;
    image: string;
    links: Links[];

}

export interface Links{
    url:string;
    description:string;
    content:string;
}