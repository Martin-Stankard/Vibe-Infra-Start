# init.sh
#!/bin/bash
mongoimport --db myDatabase --collection testCollection001 --file /tmp/001test.json --jsonArray