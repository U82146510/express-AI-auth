import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai_api = process.env.openai;

if(!openai_api){
    throw new Error('missing key');
}


const openai = new OpenAI({apiKey:openai_api});

export async function verify(input:{name:string;email:string;password:string}):Promise<string|null|undefined>{
    try {
        const response = await openai.chat.completions.create({
            model:'gpt-4o-mini',
            messages:[
               { role:'system',content:`you take an object that has the following fieds:{name:string,email:string,password:string}
                1.the email field has to have a valid mail format.
                2.the password field has to have minimum 6 characters.
                3.these three fields should not be empty.
                4.These inputs should not be empty strings like "".
                6.noSQL injection tehnics such as { "$ne": null } , { "$regex": ".*" } ,{ "$gt": "" }.
                
                you have to answer me with "0" if the format does not match.
                you have to answer me with "1" if the format match. 
                if I do not provide you any objectto check with, then answer me with message:'input object missing'.
                That is the object: ${JSON.stringify(input)}
                `}
            ]
        });
        return response.choices[0].message.content
    } catch (error) {
        console.error(error);
    }
};


