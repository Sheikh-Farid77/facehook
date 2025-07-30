export const getDateDifferenceFromNow = (fromDate) => {
    const now = new Date();
    const past = new Date(fromDate);

    let diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 1) return "Just now";

    const years = now.getFullYear() - past.getFullYear();
    const months = now.getMonth() - past.getMonth() + years * 12;

    const actualYears = Math.floor(months / 12);
    const actualMonths = months % 12;

    // Remove time covered by months
    diffInSeconds %= Math.floor(60 * 60 * 24 * 30.44);

    const hours = Math.floor(diffInSeconds / 3600);
    diffInSeconds %= 3600;

    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = Math.floor(diffInSeconds % 60);

    const parts = [];

    if (actualYears > 0) {
        parts.push(`${actualYears} year${actualYears > 1 ? "s" : ""}`);
    } else if (actualMonths > 0) {
        parts.push(`${actualMonths} month${actualMonths > 1 ? "s" : ""}`);
    } else if (minutes > 0) {
        parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
        // Hide seconds if minutes is present
    } else {
        if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
        if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
        if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
    }

    return parts.join(" ");
};
