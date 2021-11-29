export default function GetClientVersion(context) {
	let versionInfo = context.getVersionInfo();
	if (versionInfo.hasOwnProperty('Application Version')) {
		return versionInfo['Application Version'];
	} else {
        // Assume Web since Application Version is not found
        return 'Browser';
    }
}