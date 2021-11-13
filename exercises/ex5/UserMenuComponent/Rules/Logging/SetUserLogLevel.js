export default function SetUserLogLevel(context) {
    try {
        if (context.getValue() && context.getValue()[0]) {
            var logger = context.getLogger();
            var listPickerValue = context.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        logger.log(`unrecognized key ${listPickerValue}`,'DEBUG');
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        console.log(String(exception), 'Error');
        return undefined;
    }
}
