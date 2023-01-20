export interface Posts {
    frontmatter: Frontmatter;
    url: string;
}

export interface Image {
    url: string;
    alt: string;
}

export interface Frontmatter {
    title: string;
    url: string;
    description: string;
    tags: string[];
    draft?: Boolean;
    image?: Image;
    pubDate: string;
}
