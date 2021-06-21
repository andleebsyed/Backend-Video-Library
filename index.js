const express = require('express')
const cors = require('cors')
const {DbConnection} = require('./db/DbConnection')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3000
const {UsersRouter} = require('./routes/users-route')
const {VideosRouter} = require('./routes/videos-route')
const {LikedVideosRoute} = require('./routes/likedVideos-route')
const {PlaylistsRoute} = require('./routes/playlists-route')
const {AccountRoute} = require('./routes/account-route')
const {PasswordRoute} = require('./routes/password-update-route')
const {NotesRoute} = require('./routes/notes-route')

// error and route handling middlewares
const { errorHandler } = require('./middlewares/errorHandler')
const { routeNotFound } = require('./middlewares/routeNotFound')

// initialize database connection
DbConnection()

app.get('/' , (req , res) =>{
  res.json({status : true , message : "welcome to homepage"})
})

app.use('/users' , UsersRouter)
app.use('/videos' , VideosRouter)
app.use('/liked' , LikedVideosRoute)
app.use('/playlists' , PlaylistsRoute )
app.use('/account' , AccountRoute)
app.use('/password' , PasswordRoute)
app.use('/notes', NotesRoute)

// use error handling middlewares 

app.use(errorHandler)
app.use(routeNotFound)

app.listen(process.env.PORT || PORT , () => console.log("Server up and running at " , PORT))
