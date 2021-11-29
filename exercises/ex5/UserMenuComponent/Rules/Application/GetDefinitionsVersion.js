/**
 * Describe this function...
 * @param {IClientAPI} context
 */
export default function GetDefinitionsVersion(context) {
	let versionInfo = context.getVersionInfo();
	if (versionInfo.hasOwnProperty('Definitions Version')) {
		return versionInfo['Definitions Version'];
    }
	if (versionInfo.hasOwnProperty('Definition Version: ')) {
		return versionInfo['Definition Version: '];
	}    
}
