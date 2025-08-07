# Vibe-Infra-Start
Near term goal is to get this to a point of changing itself with user choose a,b,c d type ui 

TODO: debug mongo-frontend.
- Add 'get a list of all databases/records/yada' button
- clean up 'create new' 3x
- tabs, header ...idk. simple for now.
- import json button
- import 
- excel view/toolbox...can run command line from that. Go button is in a cel. Hyper dangerous...can run code from db is probably a need...ai hands
- d3 ...?....10x views of jsons retrieved from mongo. 

Stage 1 has: 
- node-stream, serves a test page and should be hitting the mongo db on its behalf.
- ollama
- mongodb 

TODO is smooth out the db io, remove the mongo-express (unless?)
Solidify index.html goals and endstate....nothing but css and a root div,onload call db for components


- ~~jsdoc...maybe come back, AND will be hitting everything with jsdoc parameters no matter what~~
- ~~jenkins~~
- ~~maybe a sqlite db for jenkins + rag (then a qdrant vector db and flowise/wildcat python rag just does a "folder of pdf's/.txt's preferrable" AND/OR .... THIS. jsdocs... .)~~
- some other node server to act as ollama's hands? Not now with Jenkins. middleware to sequential calls in jenkins~~
- ~~possibly a rag ....idk without flowise atm....but should hit that db for jenkins sql db and another vec qdrant db...can't beat that flowise rag io.~~
- pickle unit test famework, looking for use cases. 2.0 after the old junkins is humming.
- ALL out to elkstack >> rag/llm?
- k8s LOL...maybe after git workflow is worked out


Limit this file to a basic list of docker containers. Note writing NEEDS to be in JSDoc flavor.
