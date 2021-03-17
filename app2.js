const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table >')
      res.write('<tr>')
      res.write('<th>Location</th> <th>Hours</th> <th>Money</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>OOTY</td> <td>8 hours</td> <td>6000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Tirumala</td> <td> 5 hours</td> <td>2000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Tirpati</td> <td>10 hours</td> <td>5000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Chennai</td> <td>6 hours</td> <td>2500</td>')
      res.write('</tr>')
      res.write('</table>')
          
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})