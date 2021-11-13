export default function GetClientSupportVersions(context) {
    let logger = context.getLogger();
	let versionInfo = context.getVersionInfo();
	let versionStr = '';
	Object.keys(versionInfo).forEach(function(key,index) {
	    // key: the name of the object key
	    // index: the ordinal position of the key within the object
	    logger.log(`Key: ${key}   Index: ${index}`,'DEBUG');
	    if (key != 'Application Version') {
	    	versionStr += `${key}: ${versionInfo[key]}\n`;
	    }
	});
	return versionStr;
}