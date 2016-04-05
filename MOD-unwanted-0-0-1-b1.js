//unwanted test mod
//updated a while ago

var updatelog = "v0.0.1";
function updateChecker(){
try{
var out=new java.io.ByteArrayOutputStream();
var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/jdude420/new-thing-/master/update-checker.txt")).getEntity().writeTo(out);
out.close();
if(String(out.toString())==updatelog){
clientMessage("Your current update , "+updatelog+" , is the current version.");
}else{ clientMessage("Your current update , "+updatelog+" , is outdated. Get the update , "+String(out.toString())+" , at the site: \n §6https://raw.githubusercontent.com/jdude420/new-thing-/master/MOD-unwanted-0-0-1-b1.js"); }
}catch(e){ clientMessage("Please connect to the internet"); }
}
function notifications(){
try{
var out=new java.io.ByteArrayOutputStream();
var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/jdude420/new-thing-/master/notification.txt")).getEntity().writeTo(out);
out.close();
clientMessage(String(out.toString()));
}catch(e){ clientMessage("please connect to the internet to receive notifications"); }
}
function newLevel(){
updateChecker();
notifications();
clientMessage("Thank you for getting this mod by §eJDude420");
clientMessage("This mod is only test so don't take it\n 100% literally, this is my pilot mod.");
}
ModPE.setItem(3450, "book_enchanted", 0, "info", 1);
Item.addShapedRecipe(3450, 1, 0, ["000", "001", "000"], ["1", 15, 0]);
function useItem(x, y, z, iId, bId, side){
if(iId==3450){
clientMessage("This is a mod created by JDude420 \n Your current version is "+updatelog+" \nPilot mod, made for no reason, but to test if I am worthy, of, something u wouldn't understand.\nPlease enjoy this unwanted mod!\nMade from lots of trial and error");
}
}
function procCmd(cmnd){
var c = cmnd.split(" ");
if(c[0]=="help" || c[0]=="?"){
if(c[1]=="1"){
clientMessage("Showing help page ----- (pg 1/?)");
helpText("help", "help [pagenumb]", "view the help page");
helpText("item", "item [itemid] [amt]", "get an item you want");
}else{
clientMessage("Showing help page ----- (pg 1/?)");
helpText("help", "help [pagenumb]", "view the help page");
helpText("item", "item [itemid] [amt]", "get an item you want");}
}
}
function helpText(cmd, usage, note){
clientMessage("§2 - §f/"+cmd+": §e/"+usage+" §f-§a "+note);
}
