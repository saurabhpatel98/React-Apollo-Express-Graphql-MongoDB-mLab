const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express();
const PORT=4000;
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors())
app.use('/graphql',graphqlHTTP({

    schema,graphiql:true


}))
mongoose.connect('mongodb+srv://saurabhkhunt:395006@cluster0-xfq6b.mongodb.net/test?retryWrites=true&w=majority',{  useNewUrlParser: true ,useUnifiedTopology: true});
mongoose.connection.once('open',()=>{console.log('connected to database')})
app.listen(PORT,()=>{console.log("SERVER IS CONNECTED TO "+PORT)});