export default function GetClientSupportVersions(context) {
    let logger = context.getLogger();
	let versionInfo = context.getVersionInfo();
    let versionStr = '';
    var separator;

    // Adjust separator to account for Web Client differences
    let platform = context.nativescript.platformModule;
    // If platform exists check if device is iOS or Android
    if (platform.isWeb) {
        // Don't include separator for Web since it is already in the key
        separator = '';
    } else {
        if (platform.isIOS || platform.isAndroid) {
            separator = ': ';
        }
    }

	Object.keys(versionInfo).forEach(function(key,index) {
	    // key: the name of the object key
	    // index: the ordinal position of the key within the object
        logger.log(`Key: ${key}   Index: ${index}`,'DEBUG');
        // Web String is Definition Version:
	    if (key != 'Application Version' && key != 'Definitions Version' && key != 'Definition Version: ') {
	    	versionStr += `${key}${separator}${versionInfo[key]}\n`;
	    }
	});
	return versionStr;
}