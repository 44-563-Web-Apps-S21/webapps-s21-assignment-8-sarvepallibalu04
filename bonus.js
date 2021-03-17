const http = require('http')    //Pull in a useful node package
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                var jokes = ["how fun you are.","There is no fear when you are having fun.","Gentlemen, you can not fight in here. This is the war room.","Before you marry a person, you should first make them use a computer with slow Internet to see who they really are."," I want my children to have all the things I could not afford. Then I want to move in with them."," I am not superstitious, but I am a little stitious."]
                let randomIndex = Math.floor(Math.random() * jokes.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write("yours")
                res.write(jokes[randomIndex])
                console.log(randomIndex)
                console.log(jokes[randomIndex])
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})