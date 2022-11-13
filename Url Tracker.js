/*jshint esversion: 6*/
/*jshint esversion: 8*/

let myLead = [];
//let myLead = `["www.teau.ac.ke"]` template string
//myLead = JSON.parse(myLead); ----> turn string to array
//myLead.push("www.google.com");  -->push to array
//console.log(myLead);
//myLead = JSON.stringify(myLead); ---> turn array to string
//console.log(typeof mylead);
const inputEl = document.getElementById("input-el");
const saveBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector(".ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("url-tab","myLead") );
const tabBtn = document.getElementById("tab-btn");
//localStorage.setItem("myLead", "www.wikipedia.org"); acces as global variable
//localStorage.getItem("myLead");
//console.log(localStorage.getItem("myLead"));
//localStorage.clear();
if(leadsFromLocalStorage){
    myLead = leadsFromLocalStorage;
    render(myLead);
}

tabBtn.addEventListener("click", ()=>{
    //variable to which we have access to.object -->tabs and query it 
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        myLead.push(tabs[0].url);
    localStorage.setItem( "url-tab", JSON.stringify(myLead) );
    render(myLead);
    } );
});
//${} access modifier
// const link =[ { url: "https://"} ]implement with chrome api that gives us access to current active url
//use chrome.tab api to interact with the tabs chrome.tabs.query({active:true, currentWindow:true}, function(tabs){})
saveBtn.addEventListener("click", ()=>{
    myLead.push(inputEl.value);
    inputEl.value = " ";
    //store array to localstorage
    localStorage.setItem( "myLead", JSON.stringify(myLead) ); //key and value enclosed in "" double quotes 
    render(myLead);
    //verify
    //console.log( localStorage.getItem("myLead") ); avoid dom manipulation again and again
});

function render(item){
    let listItem = " ";
    for ( let i= 0; i < item.length; i++) {
    //ulEl.innerHTML/listItem += "<li><a href='"+mylead[i]+"'>" + myLead[i] + "</li>";
    /*const liEl = document.createElement("li");
    liEl.textContent += myLead[i];
    ulEl.append(liEl);*/
    listItem += `
                <li>
                    <a href="${item[i]}" target="_blank">
                    ${item[i]}
                    </a>
                </li>`;
}
ulEl.innerHTML = listItem;
}

deleteBtn.addEventListener("dblclick", ()=>{
    localStorage.clear();
    myLead = []; //clear the array
    render(myLead);
});
//template string `<li> </li> ` use ${js element}
//global variable accessed globally

//truthy
//falsy ;

/* 
false
0
" "
null
undefined
NaN --> not a number
*/
/*function getSentence(desc, arr){
for ( let i = 0; i < arr.length; i++){
    let baseString = `The ${arr.length} ${desc} are`;
    if (i === arr.length-1){
        baseString += arr[i];
    }else {
        baseString += arr[i] + ", ";
    }
}
    return baseString;
}*/
//input tag is reffered as open tag coz you are meant not to write anything between or rather self closing tags
//inputBtn.addEventListener("click", ()=>{});
//const and let are both used to declare variables
//const is used when the variable need not to be reassigned
//use the list element e.g ul.innerHtml += "<li>" +array[i] + "</li>"
//we got textContent for rendering content to an element and innerHtml for rendering html element to the html document
//append() it means adding something at the end of a document
//creating element by appending it --> const li = document.createElement("li") li.textcontent = myLead[i] ul.append(li)
//to make a list clickable you use the anchor tag
//template strings allows to break into multiple lines when using template string always use access modifier that is ${...} to escape the string
//use template string to add html code to js using ${} to add js expressions
//deployment of chrome extension json ---> javascript object notation is a convinient way for developers to store and send data e.g when sending data from server to client that is browser
//json is plain text using js object notation where the key-value pairs are wrapped between double quotes manifest_version refers which version of json you are using signaling chrome
// we have manifest_version which is now at 3, version of our application, name of our application , icon of our application and action which is what happens when we click our application from the extension page
//in the action we include the default_popup which is the main screen of our application the the default_icon which the icon for our application
//we can set min-width for our application using the min-width attribute in the css
//deployment you zip the project folder including all the files 
//using local storage
//localStorage.setItem("myUnits", "java") ---key-value pair localStorage.getItem("myUnits") localStorage.clear()
//JSON.parse() converts a string to an array JSON.stringify() converts an array to a string  //typeof myLeads
//to fect data from localStrorage you use JSON.parse(localStorage.getItem("names")) use the key to fetch data
//NaN --> Not a Number falsy and truthy values null --> how a developer signalises emptiness and undefined ---> how js signalizes emptiness
//when a function is hardcoded it has low usability thus make it more dynamic by using an argument that is a variable
//arguments or parameters in a function makes a function much more dynamic thus increases its usability
//change to template literals instead of concatenation by using let msg = `${greeting}, ${name}`
//json --> refers to javascript object notation
// it has manifest_version, version, name, action--> default_popup, default_icon
//localStorage.setItem("url", "http:/www.teau.co.ke")


//git tutorial and commands -->all commands are lowercase
//git clone used to bring a directory or repository in a remote repo
//la list all files including hidden files alternative if not using mac is ls -la
//git add . -->used to track all files including the untracked files in git
//git status -->shows the changes made-- shows all files that were created, updated, deleted
//use git add . to track files
//to commit changes use git commit -m //message in double quotes
//git push in order to push to github you have to proof to github tha you are the owner of the accounr using ssh keys
//ssh-keygen -t rsa -b 4096 -C "email"
//such for key generated ls | grep testkey
//pbcopy < ~/testkey.pub command that allows you to copy
//git init to create git repository locally
//git remote add origin git remote -v, git push origin master use upstream git push -u origin master
//git remote add origin #the link to check any remote repo connected use git remote -v
//git push by default use #git push -u origin master
//git branch -->hit letter q to get out
//use git checkout to switch through branches //to tell it to create a branch use -b git checkout -b feature