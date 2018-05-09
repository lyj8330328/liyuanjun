function word(str){
    
    
    var result=[];
    if(str.length == 1 || str.length == 0 ){
        result.push(str);
        return result;
    }else{
        var one = str.substr(0,1);
        var left = str.substr(1);
        var leftResult = word(left);
        console.log("one:"+one)
        console.log("left:"+left)
        console.log("leftResult:"+leftResult)
        for(i=0;i<leftResult.length;i++){
            for(j=0;j<leftResult[i].length+1;j++){//加1的目的是让字符one也可以插入到最后一个位置
                result.push(leftResult[i].slice(0,j) + one + leftResult[i].slice(j));
            }
        }
    } 
    
    return result
}
module.exports=word