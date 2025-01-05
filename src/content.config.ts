import {defineCollection, reference, z} from 'astro:content';


const contactCollection =
    defineCollection({
        type: 'data',
        schema: z.object({
            title: z.string(),
            email: z.string(),
            atmail: z.string(),
            contacts: z.array(reference('contactDetailCollection'))
        })
    });

const peopleCollection = defineCollection({
    type: 'data',
    schema: z.object({
        group: z.string(),
        name: z.string(),
        phone: z.string()
    })
});

const newsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        content: z.string(),
        date: z.string(),
        image: z.string(),
        links: z.array(
            z.object({
                url: z.string(),
                content: z.string(),
                description: z.string()
            })
        )
    })
});

const descriptionCollection = defineCollection({
    type: 'data',
    schema: z.object({
        descriptionContent: z.string(),
    })
})

const serviceCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        content: z.string(),
        image: z.string()
    })
})

const valeursCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        content: z.string(),
        icon: z.string()
    })
})

const aboutCollection = defineCollection({
    type: 'data',
    schema: z.object({
        description: z.string(),

    })
})


export const collections = {
    'contacts': contactCollection,
    'news': newsCollection,
    'descriptions': descriptionCollection,
    'services': serviceCollection,
    'valeurs': valeursCollection,
    'about': aboutCollection,
    'people': peopleCollection

};