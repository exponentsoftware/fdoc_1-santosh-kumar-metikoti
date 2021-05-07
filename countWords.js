
// Question a
function countWords(paragraph,a,b)
{
    var count1 = paragraph.search("a");
    var count2 = paragraph.search("b");
    if(count1>count2){
        return "The word "+a+" more frequently occurred than "+b;
    }
    else if(count1<count2){
        return "The word "+b+" more frequently occurred than "+a;
    }
    else{
        return "both occured equally";
    }
}

console.log(countWords("I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.", "you", "love"));



