For an API or web service to be RESTful, it must do the following:

Separate the client from the server
Not hold state between requests (meaning that all the information necessary to respond to a request is available in each individual request; no data, or state, is held by the server from request to request)
Use HTTP and HTTP methods (as explained in the next section).


```
require 'open-uri'

# Open http://placekitten.com/ for reading on line 4!
kittens = open("http://placekitten.com")
body = kittens.read[559, 441]

puts body
```

An HTTP request is made up of three parts:

1. The request line, which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it's looking for;
2. The header, which sends the server additional information (such as which client is making the request)
3. The body, which can be empty (as in a GET request) or contain data (if you're POSTing or PUTing information, that information is contained here).


Some APIs require authentication using a protocol called OAuth.


```
require 'open-uri'

placekitten = open('http://placekitten.com/')

puts placekitten.status
```

`.status` returns the 3 digit number from the server.

XML (which stands for E *x* tensible *M* arkup *L* anguage)  you can use custom tags

```
<pet>
  <name>Jeffrey</name>
  <species>Giraffe</species>
</pet>
```

parsing XML

```
require "rexml/document"

file = File.open("pets.txt")
doc = REXML::Document.new file
file.close

doc.elements.each("pets/pet/name") do |element|
  puts element
end
```

parsing JSON - JavaScript Object Notation
```
require 'json'

pets = File.open("pets.txt", "r")

doc = ""
pets.each do |line|
  doc << line
end
pets.close

puts JSON.parse(doc)
```
