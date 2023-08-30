const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = async (event) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    
    const operation = event.operation;
    const sentences = event.payload.sentences;
    const sentenceItems =  sentences.map(sentence => ({
        PutRequest: {
            Item: {
                text: sentence.text,
                translation: sentence.translation,
                language: sentence.language,
                phrases: sentence.words,
                meanings: sentence.meanings,
            }
        }
    }))
    
    const sentenceWordsItems = [].concat(...sentences.map(sentence => 
        sentence.root_words.map(word => ({
            PutRequest: {
                Item: {
                    id: sentence.text + "##" + sentence.language + "::" + word,
                    sentenceText: sentence.text,
                    wordText: sentence.language + "::" + word,
                }
            }
        }))
    ))

    function toBatches(items) {
        const batches = [];
        for (let i = 0; i < items.length; i += 25) {
            batches.push(items.slice(i, i + 25));
        }
        return batches;
    }

    

    async function batchWriteAll(sentenceItems,sentenceWordsItems) {
        const sentenceWordsBatches = toBatches(sentenceWordsItems);

        const promises = sentenceWordsBatches.map(batch => {
            const params = {
                RequestItems: {
                    "SentenceWords-43wjskpuynbmnhg5g4xyxppws4-dev": batch
                }
            }; 
            return dynamo.batchWrite(params).promise();
        })
        promises.push(dynamo.batchWrite({
            RequestItems: {
                "Sentence-43wjskpuynbmnhg5g4xyxppws4-dev": sentenceItems
            }
        }).promise())

        return await Promise.all(promises)
    }
    

    

        
    return await batchWriteAll(sentenceItems,sentenceWordsItems);

    


};
