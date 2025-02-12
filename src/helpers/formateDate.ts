export function formatDateTime(isoString:string) {
    const date = new Date(isoString);
    return date.toLocaleString(); 
}