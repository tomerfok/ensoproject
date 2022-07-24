# count.txt solution options:
option 1: NFS - use of 1 shared count.txt file for all servers stored on Network Files System
option 2: Every server uses it's local count.txt file. In this case I need to expose additional endpoint to each server that returns it's local count.txt file. The server that will handel the count all deployments request will go through list of all deployed servers and query their local counts, aggregate the results and return to the user the total sum. To implement this solution I need to managae a list of deployed server instances in the cluster.
option 3: MongoDB - save count.txt file in database (has I understand this option doesn't meet with the.guidelines)
# Image d.
Does the length mean the number of images in each combination?
# Delete
adding delete to provide full CRUD API