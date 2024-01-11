import { createClient} from "next-sanity";

const clientConfig= {
    projectId: "eqw6b56r",
    dataset: "production",
    apiVersion: "2023-05-14",
    useCdn: true,
    token: process.env.ACCESS_TOKEN
}

export async function saveText(text:String){
    const client = createClient(clientConfig);
    console.log(clientConfig)
    const doc = {
        _type: 'suggestion',
        suggestion_text: text
    };
  
    await client.create(doc);
}