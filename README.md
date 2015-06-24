# discourse-yuml
Add ability to right yUML diagrams directly into a discourse post.

# Limitations
Currently, it only supports yUML class diagrams.

# Usage
A yUML diagram can be specified as so

  [yuml]
  [Class] -> [Another Class]
  [/yuml]
  
Which should replace it inline with an image that makes a request to yuml.me.
