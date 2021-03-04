const { createClient } = require("@astrajs/collections")

const collection = 'posts'

exports.handler = async function (event, context, callback){    
    const astraClient = await createClient(
        {
            astraDatabaseId: process.env.ASTRA_DB_ID,
            astraDatabaseRegion: process.env.ASTRA_DB_REGION,
            username: process.env.ASTRA_DB_USERNAME,
            password: process.env.ASTRA_DB_PASSWORD,
        })

        console.log()
        const posts = astraClient
            .namespace(process.env.ASTRA_DB_KEYSPACE)
            .collection(collection)

        const data = [
            {
                
            }
        ]

        try {
            await posts.create()
            return {
                statusCode: 200
            }
        } 
        
        catch(e){
            console.error(e)
            return{
                statusCode: 500,
                body: JSON.stringify(e)
            }
        }
        
    }

