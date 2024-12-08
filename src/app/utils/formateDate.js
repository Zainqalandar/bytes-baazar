

export default function formatDate(dateString) {
    var date = new Date(dateString);
    var formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formattedDate;
}