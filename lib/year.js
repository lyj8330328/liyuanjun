function year(n){
    if((n%4==0&&n%100!=0) || n%400==0){
        return "yes"
    }
}
module.exports = year