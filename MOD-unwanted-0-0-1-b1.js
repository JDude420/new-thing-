//unwanted test mod

var updatelog = "v0.0.1.b 1";
function updateChecker(){
try{
var out=new java.io.ByteArrayOutputStream();
var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/jdude420/new-thing-/master/update-checker-001.txt")).getEntity().writeTo(out);
out.close();
if(String(out.toString)==updatelog){
clientMessage("Your current update , "+updatelog+" , is the current version.");
}else{ clientMessage("Your current update , "+updatelog+" , is outdated. Get the update , "+String(out.toString)+" , at the site: \n §6https://raw.githubusercontent.com/jdude420/new-thing-/master/MOD-unwanted-0-0-1-b1.js"); }
}catch(e){ clientMessage("Please connect to the internet");
}
