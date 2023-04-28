class Common {
    
    getCurrentTime(){
        return Math.floor(new Date().getTime()/1000)
    }
}

module.exports = new Common();