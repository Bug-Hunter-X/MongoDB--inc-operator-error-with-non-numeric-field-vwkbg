```javascript
//Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
//If you need to modify a string field, use the $set operator instead
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$set:{field2:"updatedString"}});
```