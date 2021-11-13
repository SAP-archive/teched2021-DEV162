export default function OnUserChange(context) {
    let pageProxy = context.getPageProxy();
    `New User Logged In: ${context.evaluateTargetPath('#Application/#ClientData/UserId')}`
}
