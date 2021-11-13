/**
 * Describe this function...
 * @param {IClientAPI} context
 */
export default function CallSyncAction(context) {
    let syncAction = context.getGlobalDefinition('/UserMenu/Globals/Application/SyncActionName.global').getValue();
    return context.getPageProxy().executeAction(syncAction);
}
