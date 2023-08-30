import json
import spacy
from konlpy.tag import Okt
nlp = None
okt = None

def lambda_handler(event, context):
    global nlp, okt
    if nlp is None:
        nlp = spacy.load('ko_core_news_lg')
    if okt is None:
        okt = Okt()
    
    for sentence in event["sentences"]:
        startIndex = len(sentence['language']) + 2
        doc = nlp(okt.normalize(sentence['text'][startIndex:]))
        sentence['words'] = [token.text for token in doc if token.pos_ != 'PUNCT']
        sentence['root_words'] = [okt.pos(word,stem=True)[0][0] for word in sentence['words']]

    return event['sentences']

print(lambda_handler({'sentences':[{'text':'KOREAN::한국 음식은 매우 맛있습니다.','translation':'ENGLISH::I did not go to school today.','language':'KOREAN'},{'text':'KOREAN::강아지는 공원에서 뛰어놀고 있어요.','translation':'ENGLISH::The puppy is playing in the park.','language':'KOREAN'}]},None))



# You will provided with a list of sentences and its associated words in KOREAN. Your task is to return the meaning associated with each words for each sentence in the following format
# [ 
#  [list of meanings for sentence 1],
# [list of meanings for sentence 2],
# ...
# ]