const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const port = 1337;

mongoose.connect(`mongodb://localhost:27017/Project`)
    .then(() => console.log('DB connected'))
    .catch(() => console.log('there is a problem with the DB'));

const app = express();

app.use(express.json()); // Use express.json() middleware to parse JSON data
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).send();
});

const secretKey = 'my_secret_key';


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    avatar: String
});

const topicSchema = new mongoose.Schema({
    creator: String,
    topicName: String,
    category: String,
})

const commentSchema = new mongoose.Schema({
    author: String,
    text: String,
    topic: String,
})

const User = mongoose.model('User', userSchema);

const Topic = mongoose.model('Topic', topicSchema);

const Comment = mongoose.model('Comment', commentSchema);

//register 
app.post('/user/register', async (req, res) => {
    const userInfo = req.body;
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);

    try {
        await User.create({
            username: userInfo.username,
            email: userInfo.email,
            password: hashedPassword,
            avatar: userInfo.avatar,
        });
        console.log('User created');
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
        console.error(err);
    }
});

//login
app.post('/user/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const username = user.username;

        res.status(200).json(username);
    } catch (error) {
        console.log('no such user');
    }
});

//GET topics

//cars
app.get('/categories/cars', async(req, res) => {
    const topicsArr = await Topic.find({ category: "cars" });

    res.json(topicsArr);
});

//coding
app.get('/categories/coding', async(req, res) => {
    const topicsArr = await Topic.find({ category: "coding" });

    res.json(topicsArr);
});

//computers
app.get('/categories/computers', async(req, res) => {
    const topicsArr = await Topic.find({ category: "computers" });

    res.json(topicsArr);
});

//gaming
app.get('/categories/gaming', async(req, res) => {
    const topicsArr = await Topic.find({ category: "gaming" });

    res.json(topicsArr);
});

//uncategorized
app.get('/categories/uncategorized', async(req, res) => {
    const topicsArr = await Topic.find({ category: "uncategorized" });

    res.json(topicsArr);
});

//comments
app.get('/comments/:topicName', async(req, res) => {
    const topicName = String(req.params.topicName);

    const commnetsArr = await Comment.find({ topic: topicName });

    res.json(commnetsArr);
});

//get user info
app.post('/user/info', async(req, res) => {
    const userInfo = req.body.username;
    console.log(userInfo);
    const userIfnoToSend = await User.findOne({ username: userInfo });
    console.log(userIfnoToSend);

    res.json(userIfnoToSend);
});

//get topics by username
app.post('/currentUserTopics', async(req, res) => {
    const userInfo = req.body.username;
    const topicArr = await Topic.find({ creator: userInfo });

    res.json(topicArr);
});

//create topic
app.post('/createTopic', async(req, res) => {
    const topicInfo = req.body;

    await Topic.create({
        creator: topicInfo.username,
        topicName: topicInfo.topicName,
        category: topicInfo.category
    })
});

//add comment

app.post('/addComment', async(req, res) => {
    const commentIfno = req.body;

    await Comment.create({
        author: commentIfno.author,
        text: commentIfno.text,
        topic: commentIfno.topic,
    })
});

app.listen(port, () => { console.log(`Server is listening on http://localhost:${port}`); });