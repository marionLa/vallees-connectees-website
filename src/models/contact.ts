export interface Contact {
    group: string;
    name: string;
    phone: string;
}

export interface ContactContent{
    title:string,
    email:string,
    atmail:string,
    contacts:Contact[]

}