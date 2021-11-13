export default function ShowLogout(context) {
    // Only show if app is in multi-user mode
    if (context.isAppInMultiUserMode()) {
        return true;
    } else {
        return false;
    }
}
