//unwanted test mod

var updatelog = "v0.0.1.b 1";
function updateChecker(){
var out=new java.io.ByteArrayOutputStream();
var response=android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/jdude420/new-thing-/master/update-checker-001.txt")).getEntity().writeTo(out);
out.close();
if(String(out.toString)==updatelog){

}
}
