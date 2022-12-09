export async function blobToDataURL(blob: any, callback: any) {
  var a = new FileReader();
  a.onload = function (e) {
    callback(e.target?.result);
  };
  const result = await a.readAsDataURL(blob);
  return result
}